import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';
import { Disc } from '../../disc';
import { Collection } from '../../collection';

@Component({
  selector: 'app-collections-info',
  templateUrl: './collections-info.component.html',
  styleUrls: ['./collections-info.component.css'],
  providers: [ApiService],
})
export class CollectionsInfoComponent implements OnInit {
  id: number;
  discs: Disc[];
  filteredDiscs: Disc[];
  collection: Collection;
  filter: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  deleteDisc(id: number) {
    this.apiService.deleteDisc(id)
      .then(() => (this.loadInfo()));
  }

  updateFilteredDiscs() {
    if (this.filter) {
      this.filteredDiscs = this.discs.filter((disc: Disc) => {
        const filter = this.filter.toLowerCase();
        const name = disc.name.toLowerCase();
        return name.includes(filter);
      });
    } else {
      this.filteredDiscs = [...this.discs];
    }
  }

  loadInfo() {
    this.apiService.getCollection(this.id)
      .then((collection) => (this.collection = collection));
    this.apiService.getCollectionDiscs(this.id)
      .then((discs) => {
        this.filter = '';
        this.discs = discs;
        this.filteredDiscs = discs;
      });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadInfo();
  }

}

import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Collection } from '../collection';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  providers: [ApiService],
})
export class CollectionsComponent implements OnInit {
  collections: Collection[];

  constructor(
    private apiService: ApiService
  ) { }

  loadInfo() {
    this.apiService.getCollections()
      .then(collections => (this.collections = collections));
  }

  deleteCollection(id: number) {
    this.apiService.deleteCollection(id)
      .then(() => (this.loadInfo()));
  }

  ngOnInit() {
    this.loadInfo();
  }

}

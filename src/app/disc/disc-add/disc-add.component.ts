import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';
import { Collection } from '../../collection';

@Component({
  selector: 'app-disc-add',
  templateUrl: './disc-add.component.html',
  styleUrls: ['./disc-add.component.css'],
  providers: [ApiService]
})
export class DiscAddComponent implements OnInit {
  collectionId: number;
  collection: Collection;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  loadInfo() {
    this.apiService.getCollection(this.collectionId)
      .then((collection) => (this.collection = collection));
  }

  addDisc() {
    this.apiService.createDisc(this.name, this.collectionId)
      .then(() => {
        this.name = '';
        window.alert('Disco criado com sucesso!');
      });
  }

  ngOnInit() {
    this.collectionId = this.route.snapshot.params['id'];
    this.loadInfo();
  }

}

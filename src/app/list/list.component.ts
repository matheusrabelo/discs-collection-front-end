import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Collection } from '../collection';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [ApiService],
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  collections: Collection[];

  constructor(private apiService: ApiService) {
    this.apiService.getCollections()
      .then(collections => (this.collections = collections));
  }

}

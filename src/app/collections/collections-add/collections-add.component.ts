import { Component } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-collections-add',
  templateUrl: './collections-add.component.html',
  styleUrls: ['./collections-add.component.css'],
  providers: [ApiService]
})
export class CollectionsAddComponent {
  name = '';

  constructor(
    private apiService: ApiService
  ) { }

  addCollection() {
    this.apiService.createCollection(this.name)
      .then(() => {
        this.name = '';
        window.alert('Adicionado com sucesso!');
      });
  }

}

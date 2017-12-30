import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../api.service';
import { Disc } from '../disc';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css'],
  providers: [ApiService]
})
export class DiscComponent implements OnInit {
  id: number;
  disc: Disc;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  loadInfo() {
    this.apiService.getDisc(this.id)
      .then((disc) => (this.disc = disc));
  }

  saveDisc() {
    const { id, name, collection_id } = this.disc;
    this.apiService.updateDisc(id, name, collection_id)
      .then(() => (window.alert('Atualizado com sucesso!')));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadInfo();
  }

}

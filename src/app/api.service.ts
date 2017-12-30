import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  api;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080',
    });
  }

  getCollections() {
    return this.api.get('/collections')
      .then(result => (result.data))
      .catch(() => (window.alert('Erro ao obter lista de coleções')));
  }

  getDiscs() {
    return this.api.get('/discs')
      .then(result => (result.data))
      .catch(() => (window.alert('Erro ao obter lista de discos')));
  }

  getCollectionDiscs(id: number) {
    return this.api.get(`/collections/${id}/discs`)
      .then(result => (result.data))
      .catch(() => (window.alert('Erro ao obter lista de discos de coleções')));
  }
}

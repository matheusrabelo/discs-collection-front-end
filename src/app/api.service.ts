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

  getCollection(id) {
    return this.api.get(`/collections/${id}`)
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao obter coleção')));
  }

  createCollection(name) {
    return this.api.post(`/collections`, { name })
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao criar coleção')));
  }

  deleteCollection(id) {
    return this.api.delete(`/collections/${id}`)
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao remover coleção')));
  }

  getCollections() {
    return this.api.get('/collections')
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao obter lista de coleções')));
  }

  getDisc(id) {
    return this.api.get(`/discs/${id}`)
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao obter disco')));
  }

  createDisc(name, collection_id) {
    return this.api.post(`/discs`, { name, collection_id })
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao criar disco')));
  }

  updateDisc(id, name, collection_id) {
    return this.api.put(`/discs/${id}`, { name, collection_id })
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao atualizar disco')));
  }

  deleteDisc(id) {
    return this.api.delete(`/discs/${id}`)
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao remover disco')));
  }

  getDiscs() {
    return this.api.get('/discs')
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao obter lista de discos')));
  }

  getCollectionDiscs(id: number) {
    return this.api.get(`/collections/${id}/discs`)
      .then(result => (result.data))
      .catch(() => (console.log('Erro ao obter lista de discos de coleções')));
  }
}

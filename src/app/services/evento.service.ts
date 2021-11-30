import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private listaEventos: any[];
  private url = 'http://localhost:5106/api/Usuarios/GetEventosUsuarios?id=1';

  constructor(private httpClient: HttpClient) {
    this.listaEventos = [];
  }

  get eventos() {
    return this.listaEventos;
  }

  buscarEventos() {
    return this.httpClient.get<Evento[]>(this.url);
  }

  adicionar(evento: any) {
    this.hidratar(evento);

    this.listaEventos.push(evento);
  }

  private hidratar(evento: any) {
    evento.data = new Date();
  }
}

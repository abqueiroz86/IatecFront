import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private url = 'http://localhost:5106/api/Usuarios/GetEventosUsuarios?id=1';

  constructor(private httpClient: HttpClient) {
  }

  buscarEventos() {
    return this.httpClient.get<Evento[]>(this.url);
  }

  adicionar(evento: any) {
    return this.httpClient.post<Evento>(this.url, evento);
  }
}

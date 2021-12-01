import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private url = 'http://localhost:5106/api/Usuarios';

  constructor(private httpClient: HttpClient) {
  }

  buscarEventos(idUsuario: number) {
    return this.httpClient.get<Evento[]>(this.url + '/GetEventosUsuarios?id=' + idUsuario);
  }

  adicionar(evento: any) {
    console.log(evento);
    return this.httpClient.post<Evento>('http://localhost:5106/api/EventosUsuarios', evento);
  }
}

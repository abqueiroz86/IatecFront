import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'http://localhost:5106/api/Usuarios';

  constructor(private httpClient: HttpClient) {
  }

  buscarUsuarios() {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  adicionar(usuario: any) {
    return this.httpClient.post<Usuario>(this.url, usuario);
  }
}

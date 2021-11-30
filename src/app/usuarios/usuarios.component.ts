import { UsuarioService } from './../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  @Input() usuarios: any[];

  constructor(private service: UsuarioService) {
    this.usuarios = [];
  }

  ngOnInit(): void {
    this.service.buscarUsuarios().subscribe((x) => (this.usuarios = x));
  }
}

import { UsuarioService } from './../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  @Input() usuarios: any[];
  idSelecionado: any;

  constructor(private service: UsuarioService, private router: Router) {
    this.usuarios = [];
  }

  changeUsuario() {
    this.router.navigate(['/eventos'], { queryParams: { idUsuario: this.idSelecionado} })
  }

  ngOnInit(): void {
    this.service.buscarUsuarios().subscribe((x) => (this.usuarios = x));
  }
}

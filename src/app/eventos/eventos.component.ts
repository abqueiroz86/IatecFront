import { EventoService } from './../services/evento.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent  {
  @Input() eventos: any[];
  idUsuario: any;

  constructor(private service: EventoService, private route: ActivatedRoute) {
    this.eventos = [];
  }

  buscarEventos(idUsuarios: number): void {
    this.service.buscarEventos(idUsuarios).subscribe((x) => (this.eventos = x));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idUsuario = params['idUsuario'];
    });

    this.service.buscarEventos(this.idUsuario).subscribe((x) => (this.eventos = x));
  }
}

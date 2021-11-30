import { EventoService } from './../services/evento.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  @Input() eventos: any[];

  constructor(private service: EventoService) {
    this.eventos = [];
  }

  ngOnInit(): void {
    this.service.buscarEventos().subscribe((x) => (this.eventos = x));
  }
}

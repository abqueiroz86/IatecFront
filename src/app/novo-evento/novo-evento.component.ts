import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventoService } from "../services/evento.service";

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: ['./novo-evento.component.scss']

})
export class NovoEventoComponent {
  nome: string | undefined;
  descricao: string | undefined;
  data: string | undefined;
  local: string | undefined;
  participantes: string | undefined;
  idUsuario: number | undefined;
  @Input() evento: any;

  constructor(private service: EventoService, private router: Router, private route: ActivatedRoute) {

  }

  async gravar() {
    var eventoEnvio = { usuarioId: this.idUsuario, eventoId: 0, evento: { nome: this.nome, descricao: this.descricao, local: this.local, tipo: 'C', dataHora: this.data } };
    console.log(eventoEnvio);
    this.service.adicionar(eventoEnvio).subscribe((x) => (this.evento = x));
    console.log(this.evento);

    this.router.navigate(['/eventos'], { queryParams: { idUsuario: this.idUsuario } });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idUsuario = params['idUsuario'];
      console.log(this.idUsuario);
    });
  }

}

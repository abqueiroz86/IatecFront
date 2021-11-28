import { Component } from "@angular/core";

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

  gravar() {
    /*var url = "http://localhost:5000/api/";

    this.albumList = [];
    this.http.get(url)
      .subscribe((response) => {
        this.albumList = response.json();
        this.busy = false;
      }, (response) => {
        this.errorMessage = "Request failed.";
      });*/
  }

}

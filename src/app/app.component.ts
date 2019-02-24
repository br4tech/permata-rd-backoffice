import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Permata RD';
  clientes = [];
  cliente = "";

  addCliente(){
    this.clientes.push(this.cliente);
  }
}

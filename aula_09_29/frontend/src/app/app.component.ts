import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  clientes: Cliente[] = [];

  onClienteAdicionado(cliente: Cliente) {
    this.clientes = [...this.clientes, cliente];
  }
}

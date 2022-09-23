import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terceiroprojeto';

  textoBotao = "Esconder";
  esconder = false;

  pessoas = [
    { nome: "José", idade: 18 },
    { nome: "Maria", idade: 22 },
    { nome: "joão", idade: 66 }
  ];

  adicionar(nome: any, idade: any) {
    this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
  }

  alterarExibicao() {
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
    this.esconder = !this.esconder;
  }

  onAdicionarPessoa(pessoa: { nome: string; idade: number; }) {
    this.pessoas = [pessoa, ...this.pessoas];
    }
}

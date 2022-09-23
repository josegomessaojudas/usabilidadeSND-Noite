import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  //pessoaAdicionada = new EventEmitter();
  @Output() pessoaAdicionada = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  adicionar(nome: any, idade: any) {
    const pessoa = {
    nome: nome,
    idade: idade
    };
    this.pessoaAdicionada.emit(pessoa);
    }

  pessoas = [
    { nome: "José", idade: 18 },
    { nome: "Maria", idade: 22 },
    { nome: "joão", idade: 66 }
  ];


}

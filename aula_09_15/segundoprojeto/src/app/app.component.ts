import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'segundoprojeto';
  nome:string = "José";
  idade = 20
  esconderCaixa = true;

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  vitor(){
    console.log("o vitor quer que escre com victor")
  }


  adicionar(nomeInput:any) {
  this.nome = nomeInput.value;
  this.esconderCaixa = nomeInput.value.length <= 0;
}

alterarNome(nome: any) {
  console.log(nome.target.value);
  this.nome = nome.target.value;
}
}

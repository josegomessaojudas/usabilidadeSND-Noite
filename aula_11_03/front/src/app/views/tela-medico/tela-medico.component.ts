import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/model/medico/medico';

@Component({
  selector: 'app-tela-medico',
  templateUrl: './tela-medico.component.html',
  styleUrls: ['./tela-medico.component.css']
})
export class TelaMedicoComponent implements OnInit {

  crm = 0;
  nome = '';

  constructor() { }

  ngOnInit(): void {
    this.crm = 0;
    this.nome = '';
  }

  onSave(){
    console.log(this.nome)
  }


}

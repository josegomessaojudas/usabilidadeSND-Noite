import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './previsoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'depend';

  private previsoes: Previsao[];
  constructor(private previsoesService: PrevisoesService) {
    this.previsoes = previsoesService.obterPrevisoes();
  }
}

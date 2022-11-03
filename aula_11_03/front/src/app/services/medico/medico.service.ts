import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/model/medico/medico';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private httpClient: HttpClient) { }

  listaDeMedicos(){
    return this.httpClient.get<Medico[]>('http://localhost:3000/medicos')
    .pipe(
      (res) => res,
      (err) => err
    );
  }
}

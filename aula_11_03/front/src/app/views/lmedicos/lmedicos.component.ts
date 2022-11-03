import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Medico } from 'src/app/model/medico/medico';
import { MedicoService } from 'src/app/services/medico/medico.service';

@Component({
  selector: 'app-lmedicos',
  templateUrl: './lmedicos.component.html',
  styleUrls: ['./lmedicos.component.css']
})
export class LmedicosComponent implements OnInit {

  medicos$: Observable<Medico[]> ;
  displayedColumns = ['Medico', 'Ações'];

  constructor(private serviceMedico: MedicoService ) {
    this.medicos$ = this.serviceMedico.listaDeMedicos().pipe(
      catchError((err) =>{
        console.log('ero ao carregar dados', err);
        return of([]);
      })

    )
   }

  ngOnInit(): void {

  }

  lista(){
    const jose = this.medicos$.subscribe(
      (res) => console.log(res)
    )
    console.log(jose);
  }

  onAdd(){}

  onCancelar(){}

  onEdit(registro: Medico){}

};

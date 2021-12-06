import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';

@Component({
  selector: 'app-listar-ejercicio',
  templateUrl: './listar-ejercicio.component.html',
  styleUrls: ['./listar-ejercicio.component.css']
})
export class ListarEjercicioComponent implements OnInit {

  @Input() ejercicios:Ejercicio[]=[];

  @Output() onEdit:EventEmitter<Ejercicio> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editar(ejercicio:Ejercicio){
    this.onEdit.emit(ejercicio);
  }

}
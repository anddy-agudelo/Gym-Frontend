import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() ejericios:Ejercicio[]=[];

  @Output() onEdit:EventEmitter<Ejercicio> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editar(ejercicio:Ejercicio){
    this.onEdit.emit(ejercicio);
  }

}

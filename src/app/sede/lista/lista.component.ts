import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sede } from 'src/app/models/sede.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  @Input() sedes:Sede[]=[];

  @Output() onEdit:EventEmitter<Sede> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  editar(sede:Sede){
    this.onEdit.emit(sede);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sede } from 'src/app/models/sede.model'

@Component({
  selector: 'app-listar-sede',
  templateUrl: './listar-sede.component.html',
  styleUrls: ['./listar-sede.component.css']
})
export class ListarSedeComponent implements OnInit {

  @Input() sedes:Sede[]=[];

  @Output() onEdit:EventEmitter<Sede> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editar(sede:Sede){
    this.onEdit.emit(sede);
  }

}

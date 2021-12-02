import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maquina } from 'src/app/models/maquina.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() maquinas:Maquina[]=[];

  @Output() onEdit:EventEmitter<Maquina> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editar(maquina:Maquina){
    this.onEdit.emit(maquina);
  }

}

import { Component, OnInit } from '@angular/core';
import { Maquina } from '../models/maquina.models';
import { MaquinaService } from '../services/maquina.service';


@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {


  public maquinas: Maquina[] = [];

  //Inyectar el servicio
  constructor(private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    this.traerMaquinas();
  }

  traerMaquinas(){
    this.maquinaService.traerMaquinas().subscribe((maquinas: any)=>{
        this.maquinas=maquinas;
        console.log(maquinas);
    })
  }

}
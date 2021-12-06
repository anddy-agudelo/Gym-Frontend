import { Component, OnInit } from '@angular/core';
import { Sede } from '../../models/sede.model';
import { SedeService } from '../../services/sede.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  public sedes: Sede[] = [];

  public auxSede!: Sede;

  mensaje: string="";

  estado: boolean = false;

  //Inyectar el servicio
  constructor(private sedeService: SedeService) { }

  ngOnInit(): void {
    this.traerSedes();
  }

  traerSedes(){
    this.sedeService.traerSedes().subscribe((sedes: any)=>{
        this.sedes=sedes;
        console.log(sedes);
    })
  }

  //Utilizando el método del service por POST
  enviar(sede: Sede){ //Lo recibe desde el $event --->Maquina
    this.estado=true;
    this.sedeService.guardarSedes(sede).subscribe((respuesta: any)=>{
    console.log(respuesta)
    this.mensaje=respuesta.mensaje
    this.traerSedes();
    this.estado=false;
    })
    }

    editar(sede:Sede){
      this.auxSede=sede;
    }
}

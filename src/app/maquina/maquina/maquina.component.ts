import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Maquina } from 'src/app/models/maquina.model';
import { MaquinaService } from 'src/app/services/maquina.service';


@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {


  public maquinas: Maquina[] = [];

  public auxMaquina!: Maquina;

  mensaje: string="";

  estado: boolean = false;

  //Inyectar el servicio
  constructor(private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    this.traerMaquinas();
  }

  //Utilizando el método del servicio por GET
  traerMaquinas(){
    this.maquinaService.traerMaquinas().subscribe((maquinas: any)=>{
        this.maquinas=maquinas;
        console.log(maquinas);
    })
  }

   //Utilizando el método del service por POST
    enviar(maquina: Maquina){ //Lo recibe desde el $event --->Maquina
    this.estado=true;
    this.maquinaService.guardarMaquinas(maquina).subscribe((respuesta: any)=>{
    console.log(respuesta)
    this.mensaje=respuesta.mensaje
    this.traerMaquinas();
    this.estado=false;
    })
    }

    editar(maquina:Maquina){
      this.auxMaquina=maquina;
    }

  }

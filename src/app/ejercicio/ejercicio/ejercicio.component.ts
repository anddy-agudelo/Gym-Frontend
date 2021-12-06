import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../../models/ejercicio.model';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  public ejercicios: Ejercicio[] = [];

  public auxEjercicio!: Ejercicio;

  mensaje: string="";

  estado: boolean = false;

  //Inyectar el servicio
  constructor(private ejercicioService: EjercicioService) { }

  ngOnInit(): void {
    this.traerEjercicios();
  }

  traerEjercicios(){
    this.ejercicioService.traerEjercicios().subscribe((ejercicios: any)=>{
        this.ejercicios=ejercicios;
        console.log(ejercicios);
    })
  }

  //Utilizando el método del service por POST
  enviar(ejercicio: Ejercicio){ 
    this.estado=true;
    this.ejercicioService.guardarEjercicios(ejercicio).subscribe((respuesta: any)=>{
    console.log(respuesta)
    this.mensaje=respuesta.mensaje
    this.traerEjercicios();
    this.estado=false;
    })
    }

    editar(ejercicio:Ejercicio){
      this.auxEjercicio=ejercicio;
    }
}

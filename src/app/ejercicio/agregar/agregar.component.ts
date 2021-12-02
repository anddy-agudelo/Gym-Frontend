import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ejercicio } from 'src/app/models/ejercicio.model';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

 //Definir un grupo de formulario 
EjercicioForm!:FormGroup;

@Input('ejercicio') ejercicioRecibida!: Ejercicio;

@Output() onNuevaEjercicio: EventEmitter<Ejercicio>=new EventEmitter();

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    //Contruir el formulario
    this.EjercicioForm=this.fb.group({
      id:['',Validators.required],
      descripcion:['',Validators.required],
      lunes:['',Validators.required],
      martes:['',Validators.required],
      miercoles:['',Validators.required],
      jueves:['',Validators.required],
      viernes:['',Validators.required],
      sabado:['',Validators.required],
      domingo:['',Validators.required],
      maquina:['',Validators.required]
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.EjercicioForm=this.fb.group({
      id:[this.ejercicioRecibida.id,Validators.required],
      descripcion:[this.ejercicioRecibida.descripcion,Validators.required],
      lunes:[this.ejercicioRecibida.lunes,Validators.required],
      martes:[this.ejercicioRecibida.martes,Validators.required],
      miercoles:[this.ejercicioRecibida.miercoles,Validators.required],
      jueves:[this.ejercicioRecibida.jueves,Validators.required],
      viernes:[this.ejercicioRecibida.viernes,Validators.required],
      direccion:[this.ejercicioRecibida.maquina,Validators.required]
    })
  }

  enviar(){
    if( this.EjercicioForm.valid){
      this.onNuevaEjercicio.emit(this.EjercicioForm.value)
    }else{
      alert('No pueden haber campos vacios')
    }
   }

}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ejercicio } from 'src/app/models/ejercicio.model';

@Component({
  selector: 'app-agregar-ejercicio',
  templateUrl: './agregar-ejercicio.component.html',
  styleUrls: ['./agregar-ejercicio.component.css']
})
export class AgregarEjercicioComponent implements OnInit {

  //Definir un grupo de formulario 
  EjercicioForm!:FormGroup;

@Input('ejercicio') ejercicioRecibido!: Ejercicio;

@Output() onNuevoEjercicio: EventEmitter<Ejercicio>=new EventEmitter();

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
      maquina:['',Validators.required],
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.EjercicioForm=this.fb.group({
      id:[this.ejercicioRecibido.id,Validators.required],
      descripcion:[this.ejercicioRecibido.descripcion,Validators.required],
      lunes:[this.ejercicioRecibido.lunes,Validators.required],
      martes:[this.ejercicioRecibido.martes,Validators.required],
      miercoles:[this.ejercicioRecibido.miercoles,Validators.required],
      jueves:[this.ejercicioRecibido.jueves,Validators.required],
      viernes:[this.ejercicioRecibido.viernes,Validators.required],
      sabado:[this.ejercicioRecibido.sabado,Validators.required],
      domingo:[this.ejercicioRecibido.domingo,Validators.required],
      maquina:[this.ejercicioRecibido.maquina,Validators.required],
    })
  }

  enviar(){
   if( this.EjercicioForm.valid){
     this.onNuevoEjercicio.emit(this.EjercicioForm.value)
   }else{
     alert('No pueden haber campos vacios')
   }
  }

}
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Maquina } from 'src/app/models/maquina.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //Definir un grupo de formulario 
  MaquinaForm!:FormGroup;

@Input('maquina') maquinaRecibida!: Maquina;

@Output() onNuevaMaquina: EventEmitter<Maquina>=new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Contruir el formulario
    this.MaquinaForm=this.fb.group({
      id:['',Validators.required],
      nombre_maq:['',Validators.required]
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.MaquinaForm=this.fb.group({
      id:[this.maquinaRecibida.id,Validators.required],
      nombre_maq:[this.maquinaRecibida.nombre_maq,Validators.required]
    })
  }

  enviar(){
   if( this.MaquinaForm.valid){
     this.onNuevaMaquina.emit(this.MaquinaForm.value)
   }else{
     alert('No pueden haber campos vacios')
   }
  }

}
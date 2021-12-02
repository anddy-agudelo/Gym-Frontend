import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sede } from 'src/app/models/sede.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
//Definir un grupo de formulario 
SedeForm!:FormGroup;

@Input('sede') sedeRecibida!: Sede;

@Output() onNuevaSede: EventEmitter<Sede>=new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Contruir el formulario
    this.SedeForm=this.fb.group({
      id:['',Validators.required],
      nombre_sede:['',Validators.required],
      direccion:['',Validators.required]
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.SedeForm=this.fb.group({
      id:[this.sedeRecibida.id,Validators.required],
      nombre_maq:[this.sedeRecibida.nombre_sede,Validators.required],
      direccion:[this.sedeRecibida.direccion,Validators.required]
    })
  }

  enviar(){
    if( this.SedeForm.valid){
      this.onNuevaSede.emit(this.SedeForm.value)
    }else{
      alert('No pueden haber campos vacios')
    }
   }

}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Maquina } from 'src/app/models/maquina.model';
import { MaquinaService } from 'src/app/services/maquina.service';

@Component({
  selector: 'app-agregar-ejercicio',
  templateUrl: './agregar-ejercicio.component.html',
  styleUrls: ['./agregar-ejercicio.component.css']
})
export class AgregarEjercicioComponent implements OnInit {

  //Definir un grupo de formulario 
  EjercicioForm!:FormGroup;

  public maquinas: Maquina[] = [];
  public maquina!: Maquina;

@Input('ejercicio') ejercicioRecibido!: Ejercicio;

@Output() onNuevoEjercicio: EventEmitter<Ejercicio>=new EventEmitter();

  constructor(private fb: FormBuilder,private maquinaService: MaquinaService) { }

  ngOnInit(): void {
    //Contruir el formulario
    this.EjercicioForm=this.fb.group({
      id:['',Validators.required],
      descripcion:['',Validators.required],
      lunes:[''],
      martes:[''],
      miercoles:[''],
      jueves:[''],
      viernes:[''],
      sabado:[''],
      domingo:[''],
      maquina:[this.maquina,Validators.required],
    })
    this.traerMaquinas();
  }

  ngOnChanges(changes: SimpleChanges){
    this.EjercicioForm=this.fb.group({
      id:[this.ejercicioRecibido.id,Validators.required],
      descripcion:[this.ejercicioRecibido.descripcion,Validators.required],
      lunes:[this.ejercicioRecibido.lunes],
      martes:[this.ejercicioRecibido.martes],
      miercoles:[this.ejercicioRecibido.miercoles],
      jueves:[this.ejercicioRecibido.jueves],
      viernes:[this.ejercicioRecibido.viernes],
      sabado:[this.ejercicioRecibido.sabado],
      domingo:[this.ejercicioRecibido.domingo],
      maquina:[this.ejercicioRecibido.maquina,Validators.required],
    })
  }

  traerMaquinas(){
    this.maquinaService.traerMaquinas().subscribe((maquinas: any)=>{
        this.maquinas=maquinas;
        console.log(maquinas);
    })
  }

  enviar(){
    this.maquinas.forEach((elemento: Maquina)=>{
      if(elemento.id==this.EjercicioForm.controls["maquina"].value){
        this.EjercicioForm.controls["maquina"].setValue(elemento)
      }

    })
   if( this.EjercicioForm.valid){
     this.onNuevoEjercicio.emit(this.EjercicioForm.value)
   }else{
     alert('No pueden haber campos vacios')
   }
   console.log(this.EjercicioForm.value)
  }

}
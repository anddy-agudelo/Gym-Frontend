import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    ListarComponent,
    EjercicioComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EjercicioModule { }

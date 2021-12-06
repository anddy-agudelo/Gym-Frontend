import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { AgregarComponent } from './agregar/agregar.component';
import { AgregarEjercicioComponent } from './agregar-ejercicio/agregar-ejercicio.component';
import { ListarEjercicioComponent } from './listar-ejercicio/listar-ejercicio.component';



@NgModule({
  declarations: [
    ListarComponent,
    EjercicioComponent,
    AgregarComponent,
    AgregarEjercicioComponent,
    ListarEjercicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EjercicioModule { }

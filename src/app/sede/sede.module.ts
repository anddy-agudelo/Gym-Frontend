import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeComponent } from './sede.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    SedeComponent,
    AgregarComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SedeModule { }

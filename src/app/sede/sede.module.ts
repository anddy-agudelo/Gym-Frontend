import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedeComponent } from './sede/sede.component';
import { AgregarSedeComponent } from './agregar-sede/agregar-sede.component';
import { ListarSedeComponent } from './listar-sede/listar-sede.component';



@NgModule({
  declarations: [
    SedeComponent,
       AgregarSedeComponent,
    ListarSedeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SedeModule { }

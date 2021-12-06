import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticar/login/login.component';
import { InicioComponent } from './inicio/inicio.component';


import { MaquinaComponent } from './maquina/maquina/maquina.component';
import { ListaComponent } from './maquina/lista/lista.component';
import { AgregarComponent } from './maquina/agregar/agregar.component';
import { SedeComponent } from './sede/sede/sede.component';
import { ListarSedeComponent } from './sede/listar-sede/listar-sede.component';
import { AgregarSedeComponent } from './sede/agregar-sede/agregar-sede.component';
import { EjercicioComponent } from './ejercicio/ejercicio/ejercicio.component';
import { AgregarEjercicioComponent } from './ejercicio/agregar-ejercicio/agregar-ejercicio.component';
import { ListarEjercicioComponent } from './ejercicio/listar-ejercicio/listar-ejercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MaquinaComponent,
    SedeComponent,
    EjercicioComponent,
    ListaComponent,
    AgregarComponent,
    ListarSedeComponent,
    AgregarSedeComponent,
    AgregarEjercicioComponent,
    ListarEjercicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

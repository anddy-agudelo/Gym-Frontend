import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticar/login/login.component';
import { InicioComponent } from './inicio/inicio.component';



import { SedeComponent } from './sede/sede/sede.component';
import { EjercicioComponent } from './ejercicio/ejercicio/ejercicio.component';
import { ListaComponent } from './sede/lista/lista.component';
import { AgregarComponent } from './sede/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    SedeComponent,
    EjercicioComponent,
    ListaComponent,
   
    AgregarComponent,
    

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

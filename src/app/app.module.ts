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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MaquinaComponent,
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

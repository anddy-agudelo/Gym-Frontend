import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticar/login/login.component';
import { EjercicioComponent } from './ejercicio/ejercicio/ejercicio.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { InicioComponent } from './inicio/inicio.component';
import { MaquinaComponent } from './maquina/maquina/maquina.component';
import { SedeComponent } from './sede/sede/sede.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
  },
  {
    path:'home',
    component: InicioComponent,
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'maquinas',
    component: MaquinaComponent,
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'sedes',
    component: SedeComponent,
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'ejercicios',
    component: EjercicioComponent,
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticar/login/login.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { InicioComponent } from './inicio/inicio.component';
import { MaquinaComponent } from './maquina/maquina/maquina.component';

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

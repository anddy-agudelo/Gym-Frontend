import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MaquinaComponent } from './maquina/maquina/maquina.component';

const routes: Routes = [
  {
    path:'home',
    component: InicioComponent,
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

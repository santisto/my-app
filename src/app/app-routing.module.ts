import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventosComponent} from './pages/eventos/eventos.component'
import { LoginComponent } from "./login/login.component";
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  { path: 'eventos', component:EventosComponent  },
  { path: 'login', component:LoginComponent },
  { path: 'formulario', component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

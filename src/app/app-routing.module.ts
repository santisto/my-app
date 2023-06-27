import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventosComponent} from './pages/eventos/eventos.component'
import { LoginComponent } from "./login/login.component";
import { FormularioComponent } from './pages/formulario/formulario.component';
import { QuieneSomosComponent } from './pages/quiene-somos/quiene-somos.component';
import { CalendarioEventosComponent } from './pages/calendario-eventos/calendario-eventos.component';
import { RegisterComponent } from "./registro/registro.component";

const routes: Routes = [
  { path: 'eventos', component:EventosComponent  },
  { path: 'login', component:LoginComponent },
  { path: 'formulario', component:FormularioComponent},
  { path: 'quienesSomos', component:QuieneSomosComponent},
  { path: 'calendarioEventosComponent' , component: CalendarioEventosComponent },
  { path: 'registro', component:RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

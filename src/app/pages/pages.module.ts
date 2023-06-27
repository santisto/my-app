import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { QuieneSomosComponent } from './quiene-somos/quiene-somos.component';
import { CalendarioEventosComponent } from './calendario-eventos/calendario-eventos.component';

@NgModule({
  declarations: [
    HomeComponent,
   /* FormularioComponent,*/
    LoginComponent,
    FormularioComponent,
    QuieneSomosComponent,
    CalendarioEventosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

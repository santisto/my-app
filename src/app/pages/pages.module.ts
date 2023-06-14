import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    PropuestasComponent,
   /* FormularioComponent,*/
    LoginComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PropuestasComponent } from './propuestas/propuestas.component';



@NgModule({
  declarations: [
    HomeComponent,
    PropuestasComponent,
   /* FormularioComponent,*/
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

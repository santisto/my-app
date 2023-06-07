import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';



@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CalendarioEventosComponent } from './pages/calendario-eventos/calendario-eventos.component';
import { PropuestasComponent } from './pages/propuestas/propuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FormularioComponent,
    FooterComponent,
    HomeComponent,
    EventosComponent,
    CalendarioEventosComponent,
    PropuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventosComponent} from './pages/eventos/eventos.component'
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: 'eventos', component:EventosComponent  },
  { path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

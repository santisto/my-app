import { Component } from '@angular/core';
import { EventCard } from '../eventos/eventos-model';
/*import { HttpClient } from '@angular/common/http';*/

@Component({
  selector: 'app-calendario-eventos',
  templateUrl: './calendario-eventos.component.html',
  styleUrls: ['./calendario-eventos.component.css']
})
export class CalendarioEventosComponent {
  /*
  ngOnInit() {
    this.http.get('URL_DE_LA_API').subscribe((response) => {
      this.datosApi = response;
      // Maneja la respuesta de la API
    }, (error) => {
      // Maneja el error de la solicitud
    });
  }
  */
    eventos: EventCard[] = [
      {
        nombre: 'HANDBALL',
        detalle: 'Descripción del evento 1',
        fecha: new Date('2023-06-20'),
        estado: 'Activo',
        imagen: 'assets/img/handball.jpg',
        hora: 'A LAS 3'
      },
      {
        nombre: 'Voley',
        detalle: 'Descripción del evento 2',
        fecha: new Date('2023-06-21'),
        estado: 'Inactivo',
        imagen: 'assets/img/voley.jpg',
        hora: 'A LAS 14:30'
      },
      {
        nombre: 'Basquet',
        detalle: 'Descripción del evento 3',
        fecha: new Date('2023-06-21'),
        estado: 'Inactivo',
        imagen: 'assets/img/basquet.jpg',
        hora: 'A LAS 15'
      },
      // Agrega más eventos a la lista según tus necesidades
    ];
  }


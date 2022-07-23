import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: string[] = [
    '3 canchas de Futbol 5 con cesped sintetico Forbex, 1 cubierta.',
    'Patio con Parrilla.',
    'Bufet con WiFi, futbol en HD.',
    'Eventos y cumpleaños.',
    'Iluminacion.',
    'Vestuarios.',
    'Emergencia Privada.'
  ];
  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

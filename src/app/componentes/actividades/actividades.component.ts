import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  actividades: string[] = [
    'Alquiler de cancha x Hora y Abonos mensuales.',
    'Torneos Futbol “5” Femenino, Masculino y Mixto.',
    'Entrenamientos de Futbol y Fisico recreativo y de competencia Femenino y Masculino.',
    'Escuelas de Futbol Femenina para niñas y adolecentes.',
    'Escuelas de Futbol para Varones, niños y adolecentes.',
  ];
  mostrar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  titulo: string = 'Complejo Deportivo "a 2 toques"';

  constructor() { }

  ngOnInit(): void {
  }

}

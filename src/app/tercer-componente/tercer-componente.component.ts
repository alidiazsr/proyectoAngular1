import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ejercicio4Service } from '../ejercicio4.service';

interface Objeto {
  id: number;
  nombre: string;
  kahoot: number[];
}

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrl: './tercer-componente.component.css',
  imports: [NgFor],
})


export class TercerComponenteComponent implements OnInit {
  // arrayAlumnas = [
  //   {id: 1, nombre: 'Alicia', kahoot: [1, 2, 1, 1]},
  //   {id: 2, nombre: 'Julia', kahoot: [3, 1, 4, 2]},
  //   {id: 3, nombre: 'Celeste', kahoot: [2, 4, 3, 4]},
  //   {id: 4, nombre: 'Jazmin', kahoot: [4, 3, 2, 3]},
  // ]

  arrayAlumnas: Objeto[] = [];

constructor(private ejercicio4Service: Ejercicio4Service) {}

ngOnInit(): void {
  this.arrayAlumnas = this.ejercicio4Service.obtenerAlumnas();
}
}






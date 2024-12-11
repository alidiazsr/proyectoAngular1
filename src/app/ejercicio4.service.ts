import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio4Service {
  arrayAlumnas = [
    {id: 1, nombre: 'Alicia', kahoot: [1, 2, 1, 1]},
    {id: 2, nombre: 'Julia', kahoot: [3, 1, 4, 2]},
    {id: 3, nombre: 'Celeste', kahoot: [2, 4, 3, 4]},
    {id: 4, nombre: 'Jazmin', kahoot: [4, 3, 2, 3]},
  ]
  constructor() { }

  obtenerAlumnas() {
    return this.arrayAlumnas;
  }
}

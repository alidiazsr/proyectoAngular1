import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    {id: 1, nombre: 'Juan', edad: 25},
    {id: 2, nombre: 'Marta', edad: 30},
    {id: 3, nombre: 'Carlos', edad: 35},
    {id: 4, nombre: 'Pedro', edad: 40},
  ]

  getData() {
    return this.data
  }
}

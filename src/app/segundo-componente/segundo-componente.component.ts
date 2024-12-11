import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  imports: [],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
cursoAngular: {
  nombre: string,
  duracion: string,
  modalidad: string,
  profesora: string
} = {
  nombre: 'Curso de Angular',
  duracion: '40 horas',
  modalidad: 'online',
  profesora: 'Sol López'
};

}

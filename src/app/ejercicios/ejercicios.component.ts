import { Component } from '@angular/core';
import { PrimerComponenteComponent } from '../primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from '../segundo-componente/segundo-componente.component';
import { TercerComponenteComponent } from '../tercer-componente/tercer-componente.component';




@Component({
  selector: 'app-ejercicios',
  imports: [ PrimerComponenteComponent, SegundoComponenteComponent, TercerComponenteComponent ],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}

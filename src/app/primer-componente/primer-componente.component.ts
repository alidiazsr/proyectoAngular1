import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrl: './primer-componente.component.css',
  imports: [NgIf],
})
export class PrimerComponenteComponent {
  variable1: string = 'Hola desde var1 Angular.';
  variable2: string = 'Hola desde var2 Angular.';
  varBoolean: boolean = false;

}

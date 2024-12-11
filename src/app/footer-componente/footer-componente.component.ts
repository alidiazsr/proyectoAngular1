import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-componente',
  imports: [],
  templateUrl: './footer-componente.component.html',
  styleUrl: './footer-componente.component.css'
})
export class FooterComponenteComponent {
  footerVar: string = 'UTN - San Cristobal';
  nombreDesarrollador: string = 'Alicia Díaz San Román';
}

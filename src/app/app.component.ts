import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PrimerComponenteComponent } from "./primer-componente/primer-componente.component";
// import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
// import { TercerComponenteComponent } from "./tercer-componente/tercer-componente.component";
import { HeaderComponenteComponent } from "./header-componente/header-componente.component";
import { FooterComponenteComponent } from "./footer-componente/footer-componente.component";
// import { SearchBarComponent } from './search-bar/search-bar.component';
// import { MovieListComponent } from './movie-list/movie-list.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponenteComponent, FooterComponenteComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoAngular';
  cursoAngular = {
    nombre: 'Curso de Angular',
    duracion: '40 horas',
    modalidad: 'online',
    profesora: 'Sol López'
  }
}

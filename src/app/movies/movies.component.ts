import { Component } from '@angular/core';
import { MovieListComponent } from "../movie-list/movie-list.component";
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-movies',
  imports: [MovieListComponent, SearchBarComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}

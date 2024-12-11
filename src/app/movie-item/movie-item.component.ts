
import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Movie {
  title: string;
  year: number;
  description: string;
  // Ruta de la imagen
  image: string;
}

@Component({
  selector: 'app-movie-item',
  imports: [FormsModule, NgIf],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie() {
    this.movieSelected.emit(this.movie.title);
  }
}

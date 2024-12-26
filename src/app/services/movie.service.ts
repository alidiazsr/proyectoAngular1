import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      title: 'Inception', 
      year: 2010, 
      description: 'Un thriller alucinante.',
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },

    {
      title: 'The Matrix', 
      year: 1999, 
      description: 'Un hacker descubre que la realidad es una simulación.',
      image: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
    },

    {
      title: 'Interstellar', 
      year: 2014, 
      description: 'Un viaje a los confines del espacio.',
      image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },

    {
      title: 'The Dark Knight', 
      year: 2010, 
      description: 'Batman enfrenta su mayor desafío hasta el momento cuando el Joker emerge para causar estragos en Ciudad Gótica.',
      image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },

    {
      title: "Avengers: Endgame",
      year: 2019,
      description: "Los Vengadores se reúnen una última vez para deshacer el daño causado por Thanos.",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
    },

    {
      title: "Toy Story",
      year: 1995,
      description: "Un muñeco de vaquero se ve amenazado por la llegada de un nuevo juguete espacial en este clásico cuento animado.",
      image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
    },

    {
      title: "Jurassic Park",
      year: 1993,
      description: "Los dinosaurios vagan nuevamente por la Tierra en esta emocionante aventura ambientada en un parque de diversiones que salió mal.",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
    },

    {
      title: "Forrest Gump",
      year: 1994,
      description: "La historia de un hombre con un coeficiente intelectual bajo que logra cosas increíbles a pesar de los desafíos de la vida.",
      image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    },

    {
      title: "The Lion King",
      year: 1994,
      description: "Un joven príncipe león es expulsado de su manada por su cruel tío y debe encontrar el camino de regreso para reclamar su reino.",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
    },

    {
      title: "Titanic",
      year: 1997,
      description: "Una historia de amor se desarrolla entre Jack y Rose a bordo del desafortunado RMS Titanic.",
      image: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
    },

  ] 

  getMovies(){
    return this.movies
  }
}

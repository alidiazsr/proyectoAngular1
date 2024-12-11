import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [
    {title: 'Inception', year: 2010, description: 'Un ladrón roba secretos corporativos utilizando tecnología para compartir sueños.', image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'}, 
    { title: 'Batman/ The Dark Knight', year: 2008, description: 'Batman se enfrenta al Joker en Ciudad Gótica.', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Interstellar', year: 2014, description: 'Un equipo viaja a través de un agujero de gusano para salvar a la humanidad.', image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' },
    { title: 'The Matrix', year: 1999, description: 'Un hacker descubre la verdadera naturaleza de la realidad.', image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg' },
    { title: 'Parasite/ Parásitos', year: 2019, description: 'Una familia pobre se infiltra en un hogar rico.', image: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png' },
    { title: 'The Shawshank Redemption', year: 1994, description: 'Dos hombres encarcelados se unen durante décadas.', image: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg' },
    { title: 'Pulp Fiction', year: 1994, description: 'Historias de crimen y redención en Los Ángeles.', image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg' },
    { title: 'The Godfather/ El Padrino', year: 1972, description: 'El ascenso y la caída de una familia criminal.', image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Gladiator/ Gladiador', year: 2000, description: 'Un general romano traicionado busca venganza.', image: 'https://pics.filmaffinity.com/Gladiator-368149580-large.jpg' },
    { title: 'Avatar', year: 2009, description: 'Un marino parapléjico visita un mundo extraño.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH92fwdvPZx6H-g8bx305-Q3qFaH5XoqxYCQ&s' }
  ];
  constructor() { }

  obtenerPelis() {
    return this.movies;
  } 
}

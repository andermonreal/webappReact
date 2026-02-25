// src/infrastructure/firebase/seedMovies.js
// Run this once to populate Firestore with sample movies
// Usage: import and call seedMovies() from App.js once, then remove.
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './config';

const SAMPLE_MOVIES = [
  {
    id: 'movie-001',
    title: 'El Padrino',
    year: '1972',
    genre: 'Drama / Crimen',
    director: 'Francis Ford Coppola',
    synopsis:
      'La saga de la familia Corleone, una poderosa dinastía del crimen organizado en Nueva York. Cuando el patriarca Vito Corleone es herido, su hijo Michael se ve arrastrado hacia el mundo de la mafia.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    duration: '175 min',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Diane Keaton'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-002',
    title: 'Pulp Fiction',
    year: '1994',
    genre: 'Crimen / Thriller',
    director: 'Quentin Tarantino',
    synopsis:
      'Las vidas de dos mafiosos, un boxeador, la esposa de un gángster y dos bandidos se entrelazan en cuatro historias de violencia y redención en Los Ángeles.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    duration: '154 min',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson', 'Bruce Willis'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-003',
    title: 'Interestelar',
    year: '2014',
    genre: 'Ciencia Ficción / Aventura',
    director: 'Christopher Nolan',
    synopsis:
      'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad mientras la Tierra se enfrenta a su extinción.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    duration: '169 min',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-004',
    title: 'El Club de la Lucha',
    year: '1999',
    genre: 'Drama / Thriller',
    director: 'David Fincher',
    synopsis:
      'Un insomne oficinista y un carismático vendedor de jabón fundan un club de lucha clandestino que evoluciona hacia algo mucho más peligroso.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    duration: '139 min',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-005',
    title: 'Forrest Gump',
    year: '1994',
    genre: 'Drama / Romance',
    director: 'Robert Zemeckis',
    synopsis:
      'La extraordinaria vida de Forrest Gump, un hombre con un CI bajo pero un corazón enorme, que involuntariamente influye en varios eventos históricos del siglo XX.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    duration: '142 min',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-006',
    title: 'Matrix',
    year: '1999',
    genre: 'Acción / Ciencia Ficción',
    director: 'Lana y Lilly Wachowski',
    synopsis:
      'Un hacker descubre que la realidad tal como la conocemos es una simulación informática y se une a una rebelión contra las máquinas que controlan a la humanidad.',
    posterUrl: 'https://m.media-amazon.com/images/I/51yurgqv68L._AC_UF894,1000_QL80_.jpg',
    duration: '136 min',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-007',
    title: 'La Lista de Schindler',
    year: '1993',
    genre: 'Drama / Historia',
    director: 'Steven Spielberg',
    synopsis:
      'La historia real de Oskar Schindler, un empresario alemán que salvó la vida de más de mil judíos durante el Holocausto empleándolos en sus fábricas.',
    posterUrl: 'https://m.media-amazon.com/images/I/71lwcn4uw+L.jpg',
    duration: '195 min',
    cast: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    averageRating: 0,
    totalRatings: 0,
  },
  {
    id: 'movie-008',
    title: 'El Señor de los Anillos: La Comunidad del Anillo',
    year: '2001',
    genre: 'Fantasía / Aventura',
    director: 'Peter Jackson',
    synopsis:
      'El joven hobbit Frodo Bolsón hereda el Anillo Único y emprende un viaje épico para destruirlo en las llamas del Monte del Destino, acompañado por la Comunidad del Anillo.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    duration: '178 min',
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen', 'Cate Blanchett'],
    averageRating: 0,
    totalRatings: 0,
  },
];

export const seedMovies = async () => {
  try {
    for (const movie of SAMPLE_MOVIES) {
      const { id, ...data } = movie;
      await setDoc(doc(collection(db, 'movies'), id), data);
    }
    console.log('✅ Movies seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding movies:', error);
  }
};

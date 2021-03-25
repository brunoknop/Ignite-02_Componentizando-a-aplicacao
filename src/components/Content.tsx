import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface MoviesContent {
  genre: string;
  selectedMovies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
 }>
}

export function Content({ genre, selectedMovies }: MoviesContent) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {selectedMovies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
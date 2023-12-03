import { IMovie } from '../Models/Movie.model';

const MovieItem = ({
  movie,
  setSelectedMovie,
}: {
  movie: IMovie;
  setSelectedMovie: (movie: IMovie) => void;
}) => {
  return (
    <div
      className="movie-card"
      onClick={() => {
        setSelectedMovie(movie);
      }}
    >
      <figure className="movie-card__image">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie"
          className="Movie"
        />
      </figure>
    </div>
  );
};

export default MovieItem;

import { IMovie } from '../Models/Movie.model';

const ViewMovie = ({
  movie,
  setSelectedMovie,
}: {
  movie: IMovie;
  setSelectedMovie: (movie: IMovie) => void;
}) => {
  return (
    <div className="view-movie">
      <div className="view-movie__container">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button
          onClick={() => {
            setSelectedMovie({ id: "1", overview: "", poster_path: "", title: "" });
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewMovie;

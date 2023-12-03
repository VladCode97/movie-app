import { useEffect, useState } from 'react';
import { getMovies } from '../Service/useMovies';
import MovieItem from '../Components/MovieItem';
import { IMovie } from '../Models/Movie.model';
import ViewMovie from '../Components/ViewMovie';
import { Toaster, toast } from 'sonner';

const MoviesList = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();
  const [moviesArray, setMoviesArray] = useState([]);

  const getMoviesList = async (search: string) => {
    try {
      const { results } = await getMovies(search);
      setMoviesArray(results);
    } catch (error) {
      toast.error('Search error, try again later');
    }
  };

  useEffect(() => {
    if (searchInput !== '') {
      getMoviesList(searchInput);
    }
  }, [searchInput]);

  return (
    <>
      <Toaster richColors position="top-center" />
      <input
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        type="text"
        placeholder="Type a movie title"
      />
      <section>
        {moviesArray.map((movie: IMovie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </section>
      {selectedMovie ? (
        <ViewMovie movie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      ) : null}
    </>
  );
};

export default MoviesList;

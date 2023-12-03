import MoviesList from './Containers/MoviesList';
import axios from 'axios';

function App() {
  axios.defaults.headers.common = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTI3NDQyZDNkYzg2MGU5MzY1M2FkYmM4N2E5YjFmMyIsInN1YiI6IjVjOTA1ODA1YzNhMzY4MWM5NTRjYjFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3x8XFvj2MeDZMWasyjG4hf7pYIlfE19oX8hU03SdtB0`,
  };

  return (
    <>
      <h1>Movies</h1>
      <MoviesList />
    </>
  );
}

export default App;

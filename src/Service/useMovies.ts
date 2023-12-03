import axios from 'axios';

export const getMovies = async (search: string) => {
  const response = await axios.get(
    `https://backend-nuawi-f58654165e2a.herokuapp.com/movies/${search}`
  );
  return response.data;
};

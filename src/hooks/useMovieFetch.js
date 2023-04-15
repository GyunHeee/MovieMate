import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../component/Config';

export default function useMovieFetch(page) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    axios
      .get(endpoint)
      .then((res) => {
        setMovies((prev) => [...prev, ...res.data.results]);
        setMainMovie(res.data.results[0]);
      })
      .catch(console.error);
  }, [page]);

  return [movies, mainMovie];
}

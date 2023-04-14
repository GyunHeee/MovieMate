import React, { useEffect, useState } from 'react';
import { API_URL, IMAGE_BASE_URL } from '../Config';
import axios from 'axios';
import MainImage from '../section/MainImage';

export default function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovide] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    axios
      .get(endpoint)
      .then((res) => {
        setMovies([...res.data.results]);
        setMainMovide(res.data.results[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      {mainMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${mainMovie.backdrop_path}`}
          title={mainMovie.original_title}
          text={mainMovie.overview}
        />
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_BASE_URL } from '../Config';
import { useParams } from 'react-router-dom';
import MainImage from '../section/MainImage';
import MovieInfo from '../section/MovieInfo';

export default function MovieDetail() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const endpointCredits = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    console.log(endpointInfo);

    axios
      .get(endpointInfo)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch(console.error);
  }, []);

  console.log(movie.backdrop_path);

  return (
    <div>
      <MainImage
        image={
          movie.backdrop_path
            ? `${IMAGE_BASE_URL}w1280/${movie.backdrop_path}`
            : `${IMAGE_BASE_URL}w1280/${movie.poster_path}`
        }
        title={movie.original_title}
        text={movie.overview}
      />

      <div style={{ width: '85%', margin: '1rem auto' }}>
        {/* Movie Info*/}

        <MovieInfo movie={movie} />

        <br />
        {/* Actors Grid*/}
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
        >
          <button> Toggle Actor View</button>
        </div>
      </div>
    </div>
  );
}

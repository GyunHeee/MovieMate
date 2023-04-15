import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, IMAGE_BASE_URL } from '../Config';
import { useParams } from 'react-router-dom';
import MainImage from '../section/MainImage';
import MovieInfo from '../section/MovieInfo';
import GridCards from '../section/GridCards';
import { Row } from 'antd';
import { v4 as uuid } from 'uuid';

export default function MovieDetail() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  useEffect(() => {
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    axios
      .get(endpointInfo)
      .then((res) => {
        setMovie(res.data);
      })
      .catch(console.error);

    axios.get(endpointCrew).then((res) => {
      setCasts(res.data.cast);
    });
  }, []);

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
          <button onClick={toggleActorView}> Toggle Actor View</button>
          {ActorToggle && (
            <Row gutter={[16, 16]}>
              {casts &&
                casts.map((cast) => (
                  <GridCards
                    key={uuid()}
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500/${cast.profile_path}`
                        : 'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg'
                    }
                    characterName={cast.name}
                  />
                ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { API_URL, IMAGE_BASE_URL } from '../Config';
import axios from 'axios';
import MainImage from '../section/MainImage';
import { Row } from 'antd';
import GridCards from '../section/GridCards';

export default function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovide] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchMovies = useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        setMovies([...res.data.results]);
        setMainMovide(res.data.results[0]);
        setCurrentPage(res.data.page);
      })
      .catch(console.error);
  }, []);

  const loadMoreItems = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        setMovies([...movies, ...res.data.results]);
        setMainMovide(...mainMovie, res.data.results[0]);
        setCurrentPage(res.data.page);
      })
      .catch(console.error);
  };

  return (
    <div>
      {mainMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280/${mainMovie.backdrop_path}`}
          title={mainMovie.original_title}
          text={mainMovie.overview}
        />
      )}

      <div style={{ width: '85%', margin: '1rem auto' }}>
        <h2>Movies by latest</h2>
        <hr />

        {/*Movie Grid Cards */}
        <Row gutter={[16, 16]}>
          {movies &&
            movies.map((movie) => (
              <GridCards
                key={movie.id}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`
                    : `${IMAGE_BASE_URL}w500/${movie.backdrop_path}`
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            ))}
        </Row>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreItems}>Load More</button>
      </div>
    </div>
  );
}

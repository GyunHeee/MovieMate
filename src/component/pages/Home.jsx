import React, { useEffect, useState } from 'react';
import { API_URL, IMAGE_BASE_URL } from '../Config';
import MainImage from '../section/MainImage';
import { Row } from 'antd';
import GridCards from '../section/GridCards';
import useMovieFetch from '../../hooks/useMovieFetch';
import { v4 as uuid } from 'uuid';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, mainMovie] = useMovieFetch(currentPage);

  const loadMoreItems = () => {
    setCurrentPage((prev) => prev + 1);
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
            movies.map((movie, index) => (
              <GridCards
                key={uuid()}
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

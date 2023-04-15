import React from 'react';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function GridCards({ movieId, image, movieName }) {
  const navigate = useNavigate();

  return (
    <Col lg={6} md={8} xs={24}>
      <div style={{ position: 'relative' }}>
        <div onClick={() => navigate(`/movie/${movieId}`)}>
          <img
            src={image}
            alt={movieName}
            style={{ width: '100%', height: '320px' }}
          />
        </div>
      </div>
    </Col>
  );
}

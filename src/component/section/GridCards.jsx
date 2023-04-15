import React from 'react';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function GridCards({
  movieId,
  image,
  movieName,
  homePage,
  characterName,
}) {
  const navigate = useNavigate();

  if (homePage) {
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
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
        {/*브라우저의 크기가 가장클때는 24중에 6만쓰겠다는의미 중간은 8 가장작을때는 24를 다쓰겠다는의미*/}

        <div style={{ position: 'relative' }}>
          <img
            style={{ width: '100%', height: '320px' }}
            src={image}
            alt={characterName}
          />
          <div
            style={{
              position: 'absolute',
              right: '5px',
              bottom: '5px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {image ? characterName : null}
          </div>
        </div>
      </Col>
    );
  }
}

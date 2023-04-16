import React from 'react';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GridCardsContainer = styled(Col)`
  div {
    position: relative;

    img {
      width: 100%;
      height: 320px;
    }

    div {
      position: absolute;
      right: 5px;
      bottom: 5px;
      color: white;
      font-weight: bold;
    }
  }
`;

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
      <GridCardsContainer lg={6} md={8} xs={24}>
        <div onClick={() => navigate(`/movie/${movieId}`)}>
          <img src={image} alt={movieName} />
        </div>
      </GridCardsContainer>
    );
  } else {
    return (
      <GridCardsContainer lg={6} md={8} xs={24}>
        <div>
          <img src={image} alt={characterName} />
          <div>{image ? characterName : null}</div>
        </div>
      </GridCardsContainer>
    );
  }
}

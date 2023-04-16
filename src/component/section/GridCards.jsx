import React from 'react';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GridCardsContainer = styled(Col)`
  position: relative;

  div {
    position: relative;

    img {
      width: 100%;
      height: 320px;
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      font-weight: bold;
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease-in-out;
    }

    cursor: pointer;
    :hover {
      opacity: 1;
      div {
        opacity: 1;
        transform: translateY(0);
      }
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
          <div>{movieName}</div>
        </div>
      </GridCardsContainer>
    );
  } else {
    return (
      <GridCardsContainer lg={6} md={8} xs={24}>
        <div>
          <img src={image} alt={characterName} />
          <div>{characterName}</div>
        </div>
      </GridCardsContainer>
    );
  }
}

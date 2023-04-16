import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 6xl;
  height: 100%;
`;

const LeftContainer = styled.div`
  margin-left: 30px;
  padding: 3px;

  .title {
    font-size: 3xl;
    font-weight: 800;
    padding: 3px;
    margin: 3px;
  }

  .subtitle {
    font-size: lg;
    font-weight: medium;
    padding: 3px;
    margin: 3px;
    border-bottom: 2px solid gray;
  }
`;

const RightContainer = styled.div`
  margin: 3px;
  margin-right: 20px;
  padding: 4px;

  .main-title {
    font-size: xl;
    font-weight: semibold;
    padding: 2px;
  }

  .description {
    font-size: medium;
    font-weight: medium;
    margin: 2px;
    color: gray;
  }

  .second-title {
    font-size: xl;
    font-weight: semibold;
    padding: 2px;
    margin-top: 20px;
  }

  .second-description {
    font-size: medium;
    font-weight: medium;
    margin: 2px;
    color: gray;
  }
`;

export default function About() {
  return (
    <Section>
      <LeftContainer>
        <p className="title">MovieMate</p>
        <p className="subtitle">문의: 000@naver.com</p>
      </LeftContainer>
      <RightContainer>
        <h1 className="main-title">
          1. MovieMate는 최신 인기 영화 정보를 제공하는 웹 어플리케이션입니다.
        </h1>
        <p className="description">
          모든 사용자의 설문을 바탕으로 유익한 정보를 제공하기 위해 노력합니다.
        </p>
        <h1 className="second-title">
          2. 트렌디한 최근 이슈와 유용한 정보를 제공하기 위해 노력합니다.
        </h1>
        <p className="second-description">
          국내외 최근 이슈를 정성스러운 포스팅을 통해 소비자들에게 유용한 정보를
          제공합니다.
        </p>
      </RightContainer>
    </Section>
  );
}

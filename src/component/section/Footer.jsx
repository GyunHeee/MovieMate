import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 70px;
`;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <Container>
      <FooterContainer>@ 2023 MovieMate. All rights reserved</FooterContainer>
    </Container>
  );
}

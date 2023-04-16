import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-weight: 400;
  margin-top: 15px;
`;

export default function Footer() {
  return (
    <FooterContainer>@ 2023 MovieMate. All rights reserved</FooterContainer>
  );
}

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavTitle = styled.h1`
  font-size: 2rem;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 5px;

  p {
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavHeader>
      <NavTitle onClick={() => navigate('/')}>MovieMate</NavTitle>
      <NavLinks>
        <p onClick={() => navigate('/')}>Home</p>
        <p onClick={() => navigate('/about')}>About Us</p>
      </NavLinks>
    </NavHeader>
  );
}

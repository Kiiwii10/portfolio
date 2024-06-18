import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      color: #f39c12;
    }
  }
`;

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <Brand>
        <h1>Daniel Alexander Moroz</h1>
        <SocialLinks>
          <a href="https://www.linkedin.com/in/daniel-alexander-moroz/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Kiiwii10" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:D.lebed1099@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </SocialLinks>
      </Brand>
      <NavLinks>
        <span onClick={() => handleScroll('home')}>Home</span>
        <span onClick={() => handleScroll('about')}>About</span>
        <span onClick={() => handleScroll('projects')}>Projects</span>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

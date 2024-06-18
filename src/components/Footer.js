import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
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

const Footer = () => (
  <FooterContainer>
    <p>Small fun project, written in React. Check it out on</p>
    <SocialLinks>
      <a href="https://github.com/Kiiwii10" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </SocialLinks>
  </FooterContainer>
);

export default Footer;

import React from 'react';
import styled from 'styled-components';
import avatar from '../images/lightbulb.png';

const HomeContainer = styled.div`
  color: #fff;
  background-color: #1a1a1a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const Greeting = styled.h1`
  font-size: 3rem;
  color: #f39c12;
  margin: 0;
`;

const Introduction = styled.h2`
  font-size: 1.5rem;
  // color: #f39c12;
`;

const AvatarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
`;

// const SocialLinks = styled.div`
//   margin-top: 2rem;
//   display: flex;
//   gap: 1rem;

//   a {
//     color: #fff;
//     font-size: 2rem;
//     transition: color 0.3s;

//     &:hover {
//       color: #f39c12;
//     }
//   }
// `;

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
        <Greeting>
          Welcome!
        </Greeting>
        <Introduction>This is a simple site to organize and showcase my projects and course work</Introduction>
        {/* <SocialLinks>
          <a href="https://www.linkedin.com/in/daniel-alexander-moroz/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Kiiwii10" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:D.lebed1099@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </SocialLinks> */}
      </TextContainer>
      <AvatarContainer>
        <Avatar src={avatar} alt="Avatar" />
      </AvatarContainer>
    </HomeContainer>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';
import aboutAvatar from '../images/faculty.png';


const AboutContainer = styled.div`
  color: #fff;
  background-color: #1a1a1a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  max-width: 600px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #f39c12;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AvatarContainer>
        <Avatar src={aboutAvatar} alt="About Avatar" />
      </AvatarContainer>
      <TextContainer>
        <Heading>About Me</Heading>
        <Description>
          I'm Daniel Alexander Moroz, An university student at the technion, following the Data Science curriculum under the Information Systems Engineering degree in The Faculty of Data and Decisions Science.<br /><br />
          Background as a software engineer in a startup, former professional athlete. Passionate about data, Software, new technologies and innovation.<br /><br />
          I'm currently seeking internships or part-time roles in data science, algorithm\machine learning, and software engineering.<br />
          Feel free to reach out to me if you would like to connect or collaborate.
        </Description>
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
      </TextContainer>
    </AboutContainer>
  );
};

export default About;

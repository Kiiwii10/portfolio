import React from 'react';
import styled from 'styled-components';

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const OverlayContent = styled.div`
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 80%;
  max-width: 800px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 20px;
  border-right: 1px solid #ddd;
  text-align: left;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 20px;
  text-align: left;
`;

const HomeworkRow = styled.div`
  margin-bottom: 10px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    // color: #555;
  }
`;

const GitHubLink = styled.a`
  color: white;
  font-size: 2rem;
  margin-top: 1rem;
  display: block;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    color: #f39c12;
  }
`;

const Overlay = ({ project, onClose }) => (
  <OverlayContainer onClick={onClose}>
    <OverlayContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <LeftSection>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <GitHubLink href={project.link} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </GitHubLink>
      </LeftSection>
      <RightSection>
        {project.homeworks.map((hw, index) => (
          <HomeworkRow key={index}>
            <h3>{hw.title}</h3>
            <p>{hw.description}</p>
          </HomeworkRow>
        ))}
      </RightSection>
    </OverlayContent>
  </OverlayContainer>
);

export default Overlay;

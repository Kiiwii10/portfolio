import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #333;
  border: 1px solid #444;
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
  }

  p {
    margin: 1rem 0 0;
    font-size: 1rem;
    color: #aaa;
    text-align: center;
  }
`;

const ProjectCard = ({ project, onClick }) => (
  <Card onClick={onClick}>
    <h2>{project.title}</h2>
    <p>{project.shortDescription}</p>
  </Card>
);

export default ProjectCard;

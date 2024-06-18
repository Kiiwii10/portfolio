import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #333;
  border: 1px solid #444;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:hover h2 {
    color: #f39c12;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
    transition: color 0.3s;
  }

  p {
    margin: 1rem 0 0;
    font-size: 1rem;
    color: #aaa;
  }
`;

const ProjectCard = ({ project, onClick, className }) => (
  <Card onClick={onClick} className={className}>
    <h2>{project.title}</h2>
    <p>{project.shortDescription}</p>
  </Card>
);

export default ProjectCard;
import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Overlay from '../components/Overlay';

const ProjectsContainer = styled.div`
  color: #fff;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const projects = [
  {
    title: 'Machine Learning 1',
    shortDescription: 'Fundamentals in Machine Learning',
    description: 'Advanced methods for data analysis and the integration of statistical tools and machine learning tools for data analysis...',
    link: 'https://github.com/Kiiwii10/ML1',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  },
  {
    title: 'Machine Learning 2',
    shortDescription: 'Various topics and concepts in Deep Learning',
    description: 'Advanced topics in machine learning that describe contemporary architectures of deep learning...',
    link: 'https://github.com/Kiiwii10/ML2',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    shortDescription: 'Search problems, CSPs, MDPs',
    description: 'Systematic search methods; heuristic search methods directed by an evaluation function...',
    link: 'https://github.com/Kiiwii10/AI_fundamentals',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  },
  {
    title: 'Databases',
    shortDescription: 'Theory and SQL',
    description: 'Basic topics in relational database management, including design using ERD and normalization, SQL queries...',
    link: 'https://github.com/Kiiwii10/Databases',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  },
  {
    title: 'Object Oriented Programming',
    shortDescription: 'OOP in different languages',
    description: 'Comparative approach to object-oriented programming in C++, C#, Java, and Squeak (Smalltalk)',
    link: 'https://github.com/Kiiwii10/OOP/tree/main',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  },
  {
    title: 'Operational Systems',
    shortDescription: 'Theory of OS, processes, multithreading, and more',
    description: 'Types of operating systems, hierarchical presentation. The concept of a process: data structures, creation, control...',
    link: 'https://github.com/Kiiwii10/OS',
    homeworks: [
      { title: 'Homework 1', description: 'Description of Homework 1' },
      { title: 'Homework 2', description: 'Description of Homework 2' },
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectsContainer id="projects">
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </ProjectsGrid>
      {selectedProject && (
        <Overlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </ProjectsContainer>
  );
};

export default Projects;

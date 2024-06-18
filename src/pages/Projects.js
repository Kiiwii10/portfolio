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

const CenteredProjectCard = styled(ProjectCard)`
  grid-column: span 2;
  justify-self: center;
  width: 50%;
`;


const projects = [
  {
    title: 'Machine Learning 1',
    shortDescription: 'Fundamentals in Machine Learning',
    description: 'Advanced methods for data analysis and the integration of statistical tools and machine learning tools for data analysis, visual representation, and the construction of classification and prediction systems. The topics covered in the course will include: prediction and linear regression, classification systems, support vector machines, PAC, resampling, model selection and regularization, decision and regression trees, cluster analysis. Learning outcomes: theoretical understanding of the various methods and the ability to apply them to real data.',
    link: 'https://github.com/Kiiwii10/ML1',
    homeworks: [
      { title: 'Homework 1 - Knn & logistic reg', description: '' },
      { title: 'Homework 2 - Hard & soft SVM, Perceptron', description: '' },
      { title: 'Homework 3 - GD, SGD and Cross Validation', description: '' },
      { title: 'Homework 4 - RLM, ROC', description: '' },
      { title: 'Homework 5 - Decision Trees', description: '' },
    ]
  },
  {
    title: 'Machine Learning 2',
    shortDescription: 'Various topics and concepts in Deep Learning',
    description: 'advanced topics in machine learning that describe contemporary architectures of deep learning, emphasizing the ability to fit the training sample while generalizing, and learning that generates examples from a distribution.',
    link: 'https://github.com/Kiiwii10/ML2',
    homeworks: [
      { title: 'Homework 1 - CNN', description: 'Implementation of CNNs and mathematical questions regarding Cross-Entropy' },
      { title: 'Homework 2 - Sentiment Analysis', description: 'Demonstration of Fully Connected NN Overfitting and implemintation of a Sentiment Analysis Classification model' },
      { title: 'Homework 3 - GAN', description: 'Implementation of a GAN model' },
    ]
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    shortDescription: 'Search problems, CSPs, MDPs',
    description: 'systematic search methods; heuristic search methods directed by an evaluation function (heuristic search), A*, construction of heuristics; planning with stochastic actions: Markov decision processes; learning from feedback, Q-learning; planning in adversarial games, alpha-beta pruning, MCTS, UCT; logical inference, combining syntax and semantics, model theories, reduction from planning to a logical problem; proof theories, resolution as a proof theory for propositional calculus; constraint satisfaction problems (CSP), trees, and tree width.',
    link: 'https://github.com/Kiiwii10/AI_fundamentals',
    homeworks: [
      { title: 'Homework 1 - Search', description: '' },
      { title: 'Homework 2 - MDP', description: '' },
      { title: 'Homework 3 - MCTS', description: '' },
    ]
  },
  {
    title: 'Databases',
    shortDescription: 'Theory and SQL',
    description: 'Basic topics in relational database management, including design using ERD and normalization, SQL queries, and an introduction to transaction management. hands-on experience in developing and building a database.',
    link: 'https://github.com/Kiiwii10/Databases',
    homeworks: [
      { title: 'Homework 1 - SQL, DD:', description: '' },
      { title: 'Homework 3 - django', description: '' },
      { title: 'Project', description: 'Simple django webpage with SQL implementation' },
    ]
  },
  {
    title: 'Object Oriented Programming',
    shortDescription: 'OOP in different languages',
    description: 'Comparative approach to object-oriented programming in C++, C#, Java, and Squeak (Smalltalk)',
    link: 'https://github.com/Kiiwii10/OOP/tree/main',
    homeworks: [
      { title: 'Homework 1 - Squeak Basics', description: '' },
      { title: 'Homework 2 - Java Basics', description: '' },
      { title: 'Homework 3 - Squeak Advanced', description: '' },
      { title: 'Homework 2 - Java Advanced', description: '' },
      { title: 'Homework 2 - C++ metaprogramming', description: '' },
    ]
  },
  {
    title: 'Operational Systems',
    shortDescription: 'Theory of OS, processes, multithreading, and more',
    description: 'Types of operating systems, hierarchical presentation. The concept of a process: data structures, creation, control (coordination) and destruction, inter-process communication, context switching. Main memory management: organization and implementation. Interrupt handling: input-output, scheduling, software interrupts. Real-time clock management: organization and implementation. File systems: disk input-output, data structures, directories. Input-output management: terminals, disks, communication bus, system initialization, and configuration management.',
    link: 'https://github.com/Kiiwii10/OS',
    homeworks: [
      { title: 'Homework 1 - Smash', description: 'Implementation of a small Shell in C++' },
      { title: 'Homework 2 - Multithreading', description: 'Implementation of a bank system using Multithreading in C++' },
    ]
  },
  {
    title: 'Software Structures',
    shortDescription: 'C, CPP, Unix, Bash, Assembly',
    description: 'memory management, function pointers, modules, implementation of data structures (linked lists, stack, search trees), object-oriented programming (classes, templates, inheritance, polymorphism), STL and learning the C++ language. UNIX environment, tools and mechanisms, file system, processes, programming in BASH language. Software development and maintenance methodology.',
    link: 'https://github.com/Kiiwii10/Software_Structures',
    homeworks: [
      { title: 'Homework 1 - Bash', description: '' },
      { title: 'Homework 2 - Files', description: '' },
      { title: 'Homework 3 - ADT, Makefile', description: '' },
      { title: 'Homework 4 - ADT', description: '' },
      { title: 'Homework 6 - C++', description: '' },
      { title: 'Homework 9 - Assembly', description: '' },
    ]
  },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const isOdd = projects.length % 2 !== 0;

  return (
    <ProjectsContainer id="projects">
      <ProjectsGrid>
        {projects.map((project, index) => {
          if (isOdd && index === projects.length - 1) {
            return (
              <CenteredProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            );
          }
          return (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          );
        })}
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
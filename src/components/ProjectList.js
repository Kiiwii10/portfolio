import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList({ projects, onSelectProject }) {
  return (
    <section className="projects">
      <h1>My GitHub Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            onSelect={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

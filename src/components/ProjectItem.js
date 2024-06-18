import React from 'react';
import './ProjectItem.css';

function ProjectItem({ project, onSelect }) {
  return (
    <div className="project-item" onClick={onSelect}>
      <h2 className="title">{project.title}</h2>
      <p className="hover-description">{project.description}</p>
    </div>
  );
}

export default ProjectItem;

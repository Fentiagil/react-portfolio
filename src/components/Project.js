import React from 'react';
import projectsData from '../ProjectData';
import '../assets/Project.css';

function Project() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projectsData.slice()
          .sort((a, b) => b.id - a.id).map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p><small>{project.desc}</small></p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

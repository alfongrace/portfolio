import React from 'react';
import '../../styles/App.css';

const projectsData = [
    {
    id: 1,
    title: "Okos React-Admin Back Office Website",
    description: "React based admin dashboard with user management and data visualization. I helped to do bug fixes, develop new features, and refactor this codebase for Okos, a company I interned with.",
    tech: "React, React-Admin, MUI",
    githubLink: "https://github.com/alfongrace",
    liveLink: "https://projects.okos.ca",
  },
  {
    id: 2,
    title: "Vehicle Rental Management System",
    description: "ASP.NET Core MVC application for managing vehicle rentals, including user authentication and rental tracking.",
    tech: "C#, ASP.NET Core, SQL Server, Entity Framework",
    githubLink: "https://github.com/alfongrace/Vehicle-Rental-Management-System",
    liveLink: "https://vehicle-rental-management-system20250414143330.azurewebsites.net",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects, built from scratch.",
    tech: "React, CSS, Responsive Design",
    githubLink: "https://github.com/alfongrace/portfolio",
  },
  {
    id: 4,
    title: "JavaScript Story Game",
    description: "My very first project using JavaScript. A small story game built with JS, CSS and HTML.",
    tech: "JavaScript, HTML, CSS",
    githubLink: "https://github.com/alfongrace/js-text-based-adventure-game",
  }
];

function Projects() {
  return (
    <section className="projects-page-container"> 
      <h2>My Projects</h2>
      <div className="projects">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-tech-stack"><strong>Tech:</strong> {project.tech}</p>
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button button-secondary" style={{ padding: '8px 15px', margin: '0px' }}>
                  GitHub
                </a>
              )}
              {project.liveLink && project.liveLink !== '#' && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button" style={{ padding: '8px 15px', margin: '0' }}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
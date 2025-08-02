// src/components/Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "./Projects.css";
// You should place your project images in src/assets
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";

// Create placeholder images in src/assets if you don't have them yet.
// e.g., a 600x400 gray rectangle.

const projectData = [
  {
    title: "Project One",
    description:
      "A brief description of project one. Explain the tech stack and its purpose.",
    image: projectImg1,
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of project two. Explain the tech stack and its purpose.",
    image: projectImg2,
    github: "#",
    demo: "#",
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>My Recent Work</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CgWebsite /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

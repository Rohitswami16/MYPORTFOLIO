import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import DSA from "../project-images/DSA.jpeg";
import JDBCCRUD from "../project-images/JDBCCRUD.jpeg";
import SDD from "../project-images/SDD.png";
import otpproject from "../project-images/OTP-Authentication.jpg";
import portfolio from "../project-images/portfolio-project.png";

export default function Projects() {
  const projectData = [
    {
      title: "Data-Structure-Visualization-in-JFrame",
      description:
        "A Java Swing-based visualizer for understanding data structures like Stack, Queue, and Trees with animations.",
      image: DSA,
      githubLink:
        "https://github.com/Rohitswami16/Data-Structure-Visualization-in-JFrame",
    },
    {
      title: "JDBC CRUD System",
      description:
        "A Java + JDBC application for performing Create, Read, Update, and Delete operations using a GUI interface.",
      image: JDBCCRUD,
      githubLink: "https://github.com/Rohitswami16/JDBC-CRUD-System",
    },
    {
      title: "Skin Disease Detection",
      description:
        "Developed a skin disease detection model using BERT, LSTM, and ViT. Built a Django web app for image upload and fast, accurate predictions—improving diagnosis speed by 20%.",
      image: SDD,
      githubLink: "https://github.com/Rohitswami16/Skin-Disease-Detection",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio is built with modern web technologies such as React, JavaScript, HTML, CSS, and more. It contains sections highlighting my work, skills, and achievements, including links to my GitHub repositories and live project demos.",
      image: portfolio,
      liveLink: "https://rohitswami16.github.io/MYPORTFOLIO/",
      githubLink: "https://github.com/Rohitswami16/MYPORTFOLIO",
    },
    {
      title: "OTP Authentication System",
      description:
        "Built an OTP-based authentication system in React.js using EmailJS. Replaces passwords with 30-second OTPs for improved security. Valid OTPs redirect users to the dashboard; invalid or expired ones prompt a new request.",
      image: otpproject,
      // liveLink: "https://rohitswami16.github.io/OTP-Authentication/",
      githubLink: "https://github.com/Rohitswami16/OTP-Authentication",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h1 className="header">Projects</h1>
      <div className="project-section">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-top">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div></div>
            <div className="card-bottom">
              {/* Show live link icon only if available */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-link"
                >
                  <FiExternalLink className="project-icon" />
                </a>
              )}

              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub className="project-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

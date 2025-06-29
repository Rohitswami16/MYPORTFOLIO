import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import DSA from "../project-images/DSA.jpeg";
import JDBCCRUD from "../project-images/JDBCCRUD.jpeg";
import SDD from "../project-images/SDD.png";
import otpproject from "../project-images/OTP-Authentication.jpg";
import portfolio from "../project-images/portfolio-project.png";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: "mobile",
    });
  }, []);

  const projectData = [
    {
      index: 1,
      title: "Data Structure Visualization in JFrame",
      description:
        "A Java Swing-based visualizer for understanding data structures like Stack, Queue, and Trees with animations.",
      image: DSA,
      githubLink:
        "https://github.com/Rohitswami16/Data-Structure-Visualization-in-JFrame",
    },
    {
      index: 2,
      title: "JDBC CRUD System",
      description:
        "A Java + JDBC application for performing Create, Read, Update, and Delete operations using a GUI interface.",
      image: JDBCCRUD,
      githubLink: "https://github.com/Rohitswami16/JDBC-CRUD-System",
    },
    {
      index: 3,
      title: "Skin Disease Detection",
      description:
        "Developed a skin disease detection model using BERT, LSTM, and ViT. Built a Django web app for image upload and fast, accurate predictions—improving diagnosis speed by 20%.",
      image: SDD,
      githubLink: "https://github.com/Rohitswami16/Skin-Disease-Detection",
    },
    {
      index: 4,
      title: "Portfolio Website",
      description:
        "Created a personal portfolio website to showcase my projects and skills. The site is designed to be visually appealing and user-friendly, providing a comprehensive overview of my work.",
      image: portfolio,
      liveLink: "https://rohitswami16.github.io/MYPORTFOLIO/",
      githubLink: "https://github.com/Rohitswami16/MYPORTFOLIO",
    },
    {
      index: 5,
      title: "OTP Authentication System",
      description:
        "Built an OTP authentication system in React.js with EmailJS using 30-second codes for secure login. Valid OTPs redirect to the dashboard; invalid ones prompt a retry.",
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
          <div
            className="project-card"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={index * 100}
            key={index}
          >
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
              <br />
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

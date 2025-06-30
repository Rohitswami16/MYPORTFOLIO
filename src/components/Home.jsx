import React, { useEffect, useState } from "react";
import profilePic from "../assets/Homeimage.jpg";
import { FaDownload, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const titles = [
    "Software Developer.",
    "Full Stack Developer.",
    "Java Developer.",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
      disable: "mobile",
    });
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const waitBeforeNext = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 1500);

      return () => clearTimeout(waitBeforeNext);
    }
  }, [charIndex, currentTitleIndex]);

  return (
    <section id="home" className="home">
      <div className="home-content" data-aos="fade-up-right">
        <h1>
          Hello, I'm <span>Rohit</span>
        </h1>
        <h2 className="typing-text">{displayedText}</h2>
        <p>
          I'm a passionate full-stack developer with a strong foundation in
          Java, React, and Python. I enjoy building responsive and scalable web
          applications, and I’m constantly exploring emerging technologies in AI
          and machine learning. My goal is to create impactful digital solutions
          that combine performance, design, and innovation.
        </p>

        {/* ✅ Social Icons */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rohit-swami16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rohitswami16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_rohit.xvi_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="home-buttons" >
          <a
            href="/MYPORTFOLIO/ROHIT_SWAMI_RESUME.pdf"
            download
            className="btn"
          >
            Resume <FaDownload style={{ marginLeft: "8px" }} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            Hire Me
          </a>
        </div>
      </div>

      <div className="home-image" data-aos="fade-up-left">
        {/* ✅ Profile Picture */}
        <img src={profilePic} alt="Rohit Swami" />
      </div>
    </section>
  );
}

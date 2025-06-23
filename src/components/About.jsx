import profilePic from "../assets/RohitSwami.jpeg.jpg";
import mainpic from "../assets/main.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
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

  return (
    <>
      <section className="about" id="about">
        <h1 className="header">About Me</h1>
        <div className="aboutme">
          <div className="about-container">
            <p className="about-description" data-aos="fade-up">
              Computer Science graduate with expertise in Java and SQL, eager to
              deliver innovative software solutions as a Software Developer.
              Passionate about leveraging technical skills in a collaborative
              environment and dedicated to ongoing learning and career
              advancement.
            </p>
            <p data-aos="fade-up">
              <strong>Name:</strong> Rohit Swami
            </p>
            <p data-aos="fade-up">
              <strong>Education:</strong> Bachelor of Engineering (B.E.) in
              Computer Science, 2024
            </p>
            <p data-aos="fade-up">
              <strong>Email:</strong>{" "}
              <a href="mailto:rohitswami1612@gmail.com">
                rohitswami1612@gmail.com
              </a>
            </p>
            <p data-aos="fade-up">
              <strong>Phone:</strong>{" "}
              <a href="tel:+917090428655">+91 70904 28655</a>
            </p>
          </div>

          {/* <div className="home-image">
            <img src={profilePic} alt="Rohit Swami" />
          </div> */}
        </div>

        {/* <div className="about-domain">
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Fronted Developer</h3>
          </div>
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Java Developer</h3>
          </div>
          <div className="domain-card">
            <img src="" alt="" />
            <h3>Full Stack Developer</h3>
          </div>
        </div> */}
      </section>
    </>
  );
}

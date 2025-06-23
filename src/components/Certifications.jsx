import React, { useEffect } from "react";
import PYTHONFORDATASCIENCE from "../certificates/PFDS-NPTEL.jpg";
import kodnest from "../certificates/Rohit-Swami-KODU1O3EJ.jpg";
import gfb from "../certificates/Git-for-beginners.jpg";
import pythonforbeginners from "../certificates/Python-for-beginners.jpg";
import javabasics from "../certificates/Java-basic-hackerrank.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      disable: "mobile",
    });
  }, []);

  return (
    <section id="certifications" className="certifications">
      <h1 className="header">Certifications</h1>

      <div className="certifications-section">
        <div className="certificate-card" data-aos="fade-up">
          <img
            src={PYTHONFORDATASCIENCE}
            alt="PYTHONFORDATASCIENCE"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card" data-aos="fade-up">
          <img src={kodnest} alt="KodNest" className="certificate-image" />
        </div>
        <div className="certificate-card" data-aos="fade-up">
          <img
            src={gfb}
            alt="GIT FOR BEGINEERS"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card" data-aos="fade-up">
          <img
            src={pythonforbeginners}
            alt="pythonforbeginners"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card" data-aos="fade-up">
          <img
            src={javabasics}
            alt="JAVA BASIC"
            className="certificate-image"
          />
        </div>
      </div>
    </section>
  );
}

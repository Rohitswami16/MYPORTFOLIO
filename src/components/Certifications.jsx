import React from "react";
import PYTHONFORDATASCIENCE from "../certificates/PFDS-NPTEL.jpg";
import kodnest from "../certificates/Rohit-Swami-KODU1O3EJ.jpg";
import gfb from "../certificates/Git-for-beginners.jpg";
import pythonforbeginners from "../certificates/Python-for-beginners.jpg";
import javabasics from "../certificates/Java-basic-hackerrank.jpg";

export default function certifications() {
  return (
    <section id="certifications" className="certifications">
      <h1 className="header">Certifications</h1>

      <div className="certifications-section">
        <div className="certificate-card">
          <img
            src={PYTHONFORDATASCIENCE}
            alt="PYTHONFORDATASCIENCE"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card">
          <img src={kodnest} alt="KodNest" className="certificate-image" />
        </div>
        <div className="certificate-card">
          <img
            src={gfb}
            alt="GIT FOR BEGINEERS"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card">
          <img
            src={pythonforbeginners}
            alt="pythonforbeginners"
            className="certificate-image"
          />
        </div>
        <div className="certificate-card">
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

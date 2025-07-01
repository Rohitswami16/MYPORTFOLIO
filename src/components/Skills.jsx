import React, { useEffect }from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiDjango, SiMysql } from "react-icons/si";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      disable: "mobile",
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <h1 className="header">Technical Skills</h1>
      <div className="skill-icon">
        <div className="icon-item" data-aos="fade-up"><FaHtml5 /><p>HTML5</p></div>
        <div className="icon-item" data-aos="fade-up"><FaCss3Alt /><p>CSS3</p></div>
        <div className="icon-item" data-aos="fade-up"><FaJs /><p>JavaScript</p></div>
        <div className="icon-item" data-aos="fade-up"><FaReact /><p>ReactJS</p></div>
        <div className="icon-item" data-aos="fade-up"><SiMysql /><p>MySQL</p></div>
        <div className="icon-item" data-aos="fade-up"><FaJava /><p>Java</p></div>
        <div className="icon-item" data-aos="fade-up"><SiSpringboot /><p>Spring Boot</p></div>
        <div className="icon-item" data-aos="fade-up"><SiHibernate /><p>Hibernate</p></div>
        <div className="icon-item" data-aos="fade-up"><FaPython /><p>Python</p></div>
        <div className="icon-item" data-aos="fade-up"><SiDjango /><p>Django</p></div>
      </div>
    </section>
  );
}

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiDjango, SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h1 className="header">Technical Skills</h1>
      <div className="skill-icon">
        <div className="icon-item" size={50}><FaHtml5 /><p>HTML5</p></div>
        <div className="icon-item"><FaCss3Alt /><p>CSS3</p></div>
        <div className="icon-item"><FaJs /><p>JavaScript</p></div>
        <div className="icon-item"><FaReact /><p>ReactJS</p></div>
        <div className="icon-item"><SiMysql /><p>MySql</p></div>
        <div className="icon-item"><FaJava /><p>Java</p></div>
        <div className="icon-item"><SiSpringboot /><p>Spring Boot</p></div>
        <div className="icon-item"><SiHibernate /><p>Hibernate</p></div>
        <div className="icon-item"><FaPython /><p>Python</p></div>
        <div className="icon-item"><SiDjango /><p>Django</p></div>
      </div>
    </section>
  );
}

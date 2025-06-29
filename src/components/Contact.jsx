import React, { forwardRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      alert("Email Service is not configured properly.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <h1 className="header">Contact</h1>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <h3 data-aos="fade-right">Email</h3>
              <p data-aos="fade-right">rohitswami1612@gmail.com</p>

              <h3 data-aos="fade-right">Phone No</h3>
              <p data-aos="fade-right">+91 7090428655</p>

              <h3 data-aos="fade-right">Address</h3>
              <p data-aos="fade-right">Bengaluru Karnataka, India</p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/rohit-swami16/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Rohitswami16"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"  
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/_rohit.xvi_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="form-container" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message Here..."
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

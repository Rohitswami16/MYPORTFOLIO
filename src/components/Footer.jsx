import { FaHeart, FaArrowUp } from "react-icons/fa";
import React from "react";
import "../App.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <section className="footer">
      <div>
        Copyright © {year}. Made with <FaHeart className="footer-icon" /> by
        Rohit.
      </div>

      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    </section>
  );
}

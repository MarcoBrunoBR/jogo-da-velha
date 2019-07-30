import React from "react";
import "./styles.css";

const AboutLink = ({ className, onClick }) => {
  return (
    <a onClick={onClick} href="#to-do" className={`about-link ${className}`}>
      Sobre
    </a>
  );
};

export default AboutLink;

import React from "react";
import "./styles.css";

const AboutLink = ({ className }) => {
  return (
    <a href="#to-do" className={`about-link ${className}`}>
      Sobre
    </a>
  );
};

export default AboutLink;

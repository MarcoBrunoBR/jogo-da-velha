import React from "react";
import "./styles.css";

const About = ({ isActive, children }) => (
  <section className={`about ${isActive && "-active"}`}>{children}</section>
);

export default About;

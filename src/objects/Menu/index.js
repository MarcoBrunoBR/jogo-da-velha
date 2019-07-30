import React from "react";
import "./styles.css";

const Menu = ({ onClick }) => (
  <a href="#menu" className="menu" onClick={onClick}>
    <span className="center">Menu</span>
  </a>
);

export default Menu;

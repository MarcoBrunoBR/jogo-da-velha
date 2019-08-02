import React from "react";
import "./styles.css";
import LogoGame from "../../objects/LogoGame";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";

const Header = ({ onClick }) => (
  <header className="header">
    <LogoGame />
    <AboutLink onClick={onClick} />
    <Menu onClick={onClick} />
  </header>
);

export default Header;

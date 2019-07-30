import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";

const Header = () => (
  <header className="header">
    <Logo />
    <AboutLink />
    <Menu />
  </header>
);

export default Header;

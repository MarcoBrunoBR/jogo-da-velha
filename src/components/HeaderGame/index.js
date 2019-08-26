import React from "react";
import "./styles.css";

import LogoGame from "../../objects/LogoGame";
import AboutLink from "../../objects/AboutLink";
import MenuGame from "../../objects/MenuGame";

const HeaderGame = ({ onClick }) => (
  <header className="header-game">
    <LogoGame />
    <AboutLink onClick={onClick} />
    <MenuGame onClick={onClick} />
  </header>
);

export default HeaderGame;

import React from "react";
import "./styles.css";

import LogoGame from "../../objects/LogoGame";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";

const HeaderInternal = ({ onClick }) => (
  <header className="header-internal">
    <LogoGame light />
    <AboutLink onClick={onClick} className="-light" />
    <IconClose onClick={onClick} />
  </header>
);

export default HeaderInternal;

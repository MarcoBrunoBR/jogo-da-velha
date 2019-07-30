import React from "react";
import "./styles.css";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";

const HeaderInternal = ({ onClick }) => (
  <header className="header-internal">
    <Logo light />
    <AboutLink onClick={onClick} className="-light" />
    <IconClose onClick={onClick} />
  </header>
);

export default HeaderInternal;

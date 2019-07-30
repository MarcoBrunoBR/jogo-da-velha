import React from "react";
import "./styles.css";

import Logo from "../../objects/Logo";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";

const HeaderInternal = () => (
  <header className="header-internal">
    <Logo light />
    <AboutLink className="-light" />
    <IconClose />
  </header>
);

export default HeaderInternal;

import React from "react";

import CollabCode from "../../img/collabcode.png";
import CollabCodeLight from "../../img/collabcodelight.png";

const LogoGame = ({ light }) => (
  <img
    className="logo-game"
    src={`${light ? CollabCodeLight : CollabCode}`}
    alt="Logo da CollabCode"
  />
);

export default LogoGame;

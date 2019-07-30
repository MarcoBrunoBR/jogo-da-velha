import React from "react";

import CollabCode from "../../img/collabcode.png";
import CollabCodeLight from "../../img/collabcodelight.png";

const Logo = ({ light }) => (
  <img
    src={`${light ? CollabCodeLight : CollabCode}`}
    alt="Logo da CollabCode"
  />
);

export default Logo;

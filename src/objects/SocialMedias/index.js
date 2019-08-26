import React from "react";
import GitHub from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/facebook.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";

import IconSocial from "../IconSocial";

const SocialMedia = () => (
  <ul className="social-media">
    <li className="item">
      <IconSocial src={GitHub} alt="Logo da empresa GitHub" />
    </li>
    <li className="item">
      <IconSocial src={Linkedin} alt="Logo da empresa Linkedin" />
    </li>
    <li className="item">
      <IconSocial src={Facebook} alt="Logo da empresa Facebook" />
    </li>
    <li className="item">
      <IconSocial src={Twitter} alt="Logo da empresa Twitter" />
    </li>
    <li className="item">
      <IconSocial src={Instagram} alt="Logo da empresa Instragram" />
    </li>
  </ul>
);

export default SocialMedia;

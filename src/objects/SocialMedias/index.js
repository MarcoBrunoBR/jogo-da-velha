import React from "react";
import GitHub from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Facebook from "../../img/facebook.png";
import Twitter from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";

import IconSocial from "../IconSocial";

const SocialMedia = () => (
  <ul class="">
    <li>
      <IconSocial src={GitHub} alt="Logo da empresa GitHub" />
    </li>
    <li>
      <IconSocial src={Linkedin} alt="Logo da empresa Linkedin" />
    </li>
    <li>
      <IconSocial src={Facebook} alt="Logo da empresa Facebook" />
    </li>
    <li>
      <IconSocial src={Twitter} alt="Logo da empresa Twitter" />
    </li>
    <li>
      <IconSocial src={Instagram} alt="Logo da empresa Instragram" />
    </li>
  </ul>
);

export default SocialMedia;

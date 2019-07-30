import React from "react";

import "./styles.css";

const IconClose = ({ onClick }) => (
  <a onClick={onClick} href="#to-do" className="icon-close">
    <span className="content">Fechar</span>
  </a>
);

export default IconClose;

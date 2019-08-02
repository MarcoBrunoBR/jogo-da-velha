import React from "react";
import "./styles.css";

const LayerDark = ({ isActive, children }) => (
  <section className={`layer-dark ${isActive && "-active"}`}>{children}</section>
);

export default LayerDark;

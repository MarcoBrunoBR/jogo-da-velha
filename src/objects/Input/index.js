import React from "react";
import "./styles.css";

const Input = ({ id, value }) => (
  <div className="wrapper-input">
    <input className="input" id={id} type="checkbox" value={value} />

    <label htmlFor={id} className="beautiful">
      {value}
    </label>
  </div>
);

export default Input;

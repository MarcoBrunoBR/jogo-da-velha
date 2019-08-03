import React from "react";
import "./styles.css";

import InputGame from "../InputGame";
import LabelGame from "../LabelGame";

const InputCheckbox = ({ id, value, onClick }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <LabelGame htmlFor={id} content={value} onClick={onClick}>
      <span className="beautiful"></span>
    </LabelGame>
  </>
);

export default InputCheckbox;

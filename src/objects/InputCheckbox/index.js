import React from "react";
import "./styles.css";

import InputGame from "../InputGame";
import LabelGame from "../LabelGame";

const InputCheckbox = ({ id, value }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <LabelGame htmlFor={id} content={value}>
      <span className="beautiful"></span>
    </LabelGame>
  </>
);

export default InputCheckbox;

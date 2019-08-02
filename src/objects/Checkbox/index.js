import React from "react";
import "./styles.css";

import InputGame from "../InputGame";
import Label from "../Label";

const Checkbox = ({ id, value }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <Label htmlFor={id} content={value}>
      <span className="beautiful"></span>
    </Label>
  </>
);

export default Checkbox;

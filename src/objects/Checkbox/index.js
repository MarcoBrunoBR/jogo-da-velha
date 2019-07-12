import React from "react";
import "./styles.css";

import Input from "../Input";
import Label from "../Label";

const Checkbox = ({ id, value }) => (
  <>
    <Input id={id} value={value} type="checkbox" />
    <Label htmlFor={id} content={value}>
      <span className="beautiful"></span>
    </Label>
  </>
);

export default Checkbox;

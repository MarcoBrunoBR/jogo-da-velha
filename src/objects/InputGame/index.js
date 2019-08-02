import React from "react";

const InputGame = ({ id = "", value = "", type = "text" }) => (
  <input className="input-game" id={id} type={type} value={value} />
);

export default InputGame;

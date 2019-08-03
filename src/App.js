import React, { useState } from "react";
import "./App.css";
import Photo from "./img/profile.jpg";

import CardLight from "./objects/CardLight";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

const App = () => {
  const [aboutActive, setAboutActive] = useState(false);
  const history = [{
    content: "Adicionou X"
  }, {
    content: "Adicionou O"
  }, {
    content: "Adicionou X"
  }, {
    content: "EMPATE!",
    className: "-finish"
  }]

  const handleClick = () => setAboutActive(old => !old);

  return (
    <>
      <HeaderGame onClick={handleClick} />
      <CardLight>
        <HashtagGame />
      </CardLight>
      <InputCheckbox id="show" value="Mostrar eventos" />
      <HistoryGame tags={history} />
      <LayerDark isActive={aboutActive}>
        <HeaderInternal onClick={handleClick} />
        <ProfileUser photo={Photo} />
      </LayerDark>
    </>
  );
};

export default App;

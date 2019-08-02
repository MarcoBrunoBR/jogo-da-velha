import React, { useState } from "react";
import "./App.css";
import Photo from "./img/profile.jpg";

import Card from "./objects/Card";
import Checkbox from "./objects/Checkbox";
import LayerDark from "./objects/LayerDark";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [aboutActive, setAboutActive] = useState(true);

  const handleClick = () => setAboutActive(old => !old);

  return (
    <>
      <Header onClick={handleClick} />
      <Card>
        <Hashtag />
      </Card>
      <Checkbox id="show" value="Mostrar eventos" />
      <LayerDark isActive={aboutActive}>
        <HeaderInternal onClick={handleClick} />
        <ProfileUser photo={Photo} />
      </LayerDark>
    </>
  );
};

export default App;

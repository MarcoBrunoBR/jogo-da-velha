import React from "react";
import "./App.css";
import Profile from "./img/profile.jpg";

import Card from "./objects/Card";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import AboutAvatar from "./objects/AboutAvatar";
import TitleGame from "./objects/TitleGame";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Hashtag />
      </Card>
      <Checkbox id="show" value="Mostrar eventos" />
      <About>
        <HeaderInternal />
        <AboutAvatar src={Profile} alt="Profile do Marco Bruno" />
        <TitleGame content="Marco Bruno" />
      </About>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";

import Card from "./objects/Card";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import Logo from "./objects/Logo";
import AboutLink from "./objects/AboutLink";
import Close from "./objects/Close";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

function App() {
  return (
    <>
      <Header />
      <Card>
        <Hashtag />
      </Card>
      <Checkbox id="show" value="Mostrar eventos" />
      <About>
        <Logo light />
        <AboutLink className="-light" />
        <Close />
      </About>
    </>
  );
}

export default App;

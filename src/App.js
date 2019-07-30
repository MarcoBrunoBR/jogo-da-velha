import React from "react";
import "./App.css";
import Photo from "./img/profile.jpg";

import Card from "./objects/Card";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

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
        <ProfileUser photo={Photo} />
      </About>
    </>
  );
}

export default App;

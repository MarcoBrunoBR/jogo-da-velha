import React from 'react';
import './App.css';

import Card from './objects/Card';
import Input from './objects/Input';
import Label from './objects/Label';
import Header from './components/Header';
import Hashtag from './components/Hashtag';


function App() {
  return (
    <>
      <Header />
      <Card>
        <Hashtag />
      </Card>
      <Input id="show" />
      <Label htmlFor="show" content="Mostrar eventos" />
    </>
  );
}

export default App;

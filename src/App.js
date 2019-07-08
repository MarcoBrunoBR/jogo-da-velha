import React from 'react';
import './App.css';

import Card from './objects/Card';
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
      <Label content="Mostrar eventos" />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

import Card from './objects/Card';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

function App() {
  return (
    <>
      <Header />
      <Card>
        <Hashtag />
      </Card>
    </>
  );
}

export default App;

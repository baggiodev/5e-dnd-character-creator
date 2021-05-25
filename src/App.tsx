import React, { useContext } from 'react';
import { Header } from './components/Header';
import { GlobalContext } from './context/GlobalState';
import "./App.css";
import { CharacterInfo } from './components/CharacterInfo';
import { Features } from './components/Features';

function App() {
  const { chosenClass } = useContext(GlobalContext);

  const showFeatures = !!chosenClass ? <Features /> : null
  return (
    <div>
      <Header />
      <div className="container">
        <CharacterInfo />
        {showFeatures}
      </div>
    </div>
  );
}

export default App;

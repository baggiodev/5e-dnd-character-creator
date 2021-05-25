import React from 'react';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import "./App.css";
import { CharacterInfo } from './components/CharacterInfo';
import { Features } from './components/Features';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <CharacterInfo />
        <Features />
      </div>
    </GlobalProvider>
  );
}

export default App;

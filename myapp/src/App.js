import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://en.islcollective.com/preview/201409/f/lets-count-fun-activities-games-games_72507_1.jpg" className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;

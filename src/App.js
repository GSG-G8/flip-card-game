/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

import Board from "./Components/Board";

const App = () => {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0);

  const gameStart = () => setStart(true);

  useEffect(() => {
    const timerFunc = setTimeout(() => setTimer((t) => t + 1), 1000);
    
    return () => clearTimeout(timerFunc);
  });

  return (
    <div className="container">
      <h1>Flip Card Game</h1>
      {!start && (
        <div>
          <p>Do you have a strong memory ? let's see ...</p>
          <p>click on a card to flip it and try to make a match</p>
          <button onClick={gameStart} type="button" className="game-start-btn">
            Game Start
          </button>
        </div>
      )}
      <hr />
      {start && <Board />}
    </div>
  );
};

export default App;

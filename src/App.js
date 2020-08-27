/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import Board from './Components/Board';

const App = () => {
  const [start, setStart] = useState(false);

  const gameStart = () => setStart(true);

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

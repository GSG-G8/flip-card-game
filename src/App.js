/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import Board from './Components/Board';

const App = () => {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(null);
  const [error, setError] = useState(null);

  const gameStart = () => {
    if (level) setStart(true);
    else setError('please choose level');
  };

  const selectLevel = (e) => setLevel(e.target.value);

  return (
    <div className="container">
      <h1>Flip Card Game</h1>
      {!start && (
        <div>
          <p>Do you have a strong memory ? let's see ...</p>
          <p>click on a card to flip it and try to make a match</p>
          <div style={error && { border: '2px red solid' }}>
            <p>Please select level:</p>
            <label htmlFor="easy">
              <input
                type="radio"
                id="easy"
                name="level"
                value="24"
                onChange={selectLevel}
              />
              Easy
            </label>
            <label htmlFor="medium">
              <input
                type="radio"
                id="medium"
                name="level"
                value="30"
                onChange={selectLevel}
              />
              Medium
            </label>
            <label htmlFor="hard">
              <input
                type="radio"
                id="hard"
                name="level"
                value="48"
                onChange={selectLevel}
              />
              Hard
            </label>
          </div>
          <button onClick={gameStart} type="button" className="game-start-btn">
            Game Start
          </button>
        </div>
      )}
      <hr />
      {start && <Board level={Number(level)} />}
    </div>
  );
};

export default App;

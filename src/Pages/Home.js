/* eslint-disable react/no-unescaped-entities */
import React, { useState, Suspense } from 'react';
import { useHistory } from 'react-router-dom';

import Loader from '../Components/Loader';

const Board = React.lazy(() => import('../Components/Board'));

const levels = {
  easy: 20,
  medium: 30,
  hard: 40,
};

const Home = () => {
  const [start, setStart] = useState(false);
  const [level, setLevel] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

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
                value="easy"
                onChange={selectLevel}
              />
              Easy
            </label>
            <label htmlFor="medium">
              <input
                type="radio"
                id="medium"
                name="level"
                value="medium"
                onChange={selectLevel}
              />
              Medium
            </label>
            <label htmlFor="hard">
              <input
                type="radio"
                id="hard"
                name="level"
                value="hard"
                onChange={selectLevel}
              />
              Hard
            </label>
          </div>
          <button onClick={gameStart} type="button" className="btn">
            Game Start
          </button>
          <button
            onClick={() => history.push('/score')}
            type="button"
            className="btn"
          >
            See top scores
          </button>
        </div>
      )}
      <hr />
      {start && (
        <Suspense fallback={<Loader />}>
          <Board level={level} cardsNum={levels[level]} />
        </Suspense>
      )}
    </div>
  );
};

export default Home;

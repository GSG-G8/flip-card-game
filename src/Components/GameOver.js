import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import useLocalStorage from 'react-use-localstorage';

const calculateScore = (duration, cardsNum) =>
  Math.ceil((cardsNum / duration) * 1000);

const GameOver = ({ duration, cardsNum, level }) => {
  const [player, setPlayer] = useState('');
  const history = useHistory();
  const [scores, setScores] = useLocalStorage(
    'scores',
    JSON.stringify({
      easy: [],
      medium: [],
      hard: [],
    })
  );

  const score = calculateScore(duration, cardsNum);
  const canSave = Boolean(player);

  const savePlayer = (id) => {
    const currentScores = JSON.parse(scores);
    currentScores[level].push({ id, player, score });
    setScores(JSON.stringify(currentScores));
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <p>Congratulation</p>
        <p>Your score is {score}</p>
        <div>
          <input
            id="playerName"
            type="text"
            value={player}
            placeholder="Player Name"
            onChange={(e) => setPlayer(e.target.value)}
          />
          <button
            type="button"
            className="btn"
            disabled={!canSave}
            onClick={() => {
              const id = nanoid();
              savePlayer(id);
              history.push({ pathname: '/score', state: { id, level } });
            }}
          >
            Save Me
          </button>
        </div>
      </div>
    </div>
  );
};

GameOver.propTypes = {
  duration: propTypes.number.isRequired,
  cardsNum: propTypes.number.isRequired,
  level: propTypes.string.isRequired,
};

export default GameOver;

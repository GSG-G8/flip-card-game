import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

const orderScore = (arr) => arr.sort((a, b) => b.score - a.score);

const Score = () => {
  const location = useLocation();
  const history = useHistory();
  const [levelsScoresStringified] = useLocalStorage(
    'scores',
    JSON.stringify({
      easy: [],
      medium: [],
      hard: [],
    })
  );

  const [roundLevel, setRoundLevel] = useState(
    () => location.state?.level || 'easy'
  );

  const winnerId = location.state?.id;

  const levelsScores = JSON.parse(levelsScoresStringified);

  const [scores, setScores] = useState(() =>
    orderScore(levelsScores[roundLevel || 'easy'])
  );

  return (
    <div>
      <button type="button" className="btn" onClick={() => history.push('./')}>
        Go Back
      </button>
      <section>
        <h1>Top Scores</h1>
        <div>
          <button
            type="button"
            className={roundLevel === 'easy' ? 'btn-clicked' : 'btn'}
            onClick={() => {
              setScores(orderScore(levelsScores.easy));
              setRoundLevel('easy');
            }}
          >
            Easy
          </button>
          <button
            type="button"
            className={roundLevel === 'medium' ? 'btn-clicked' : 'btn'}
            onClick={() => {
              setScores(orderScore(levelsScores.medium));
              setRoundLevel('medium');
            }}
          >
            Medium
          </button>
          <button
            type="button"
            className={roundLevel === 'hard' ? 'btn-clicked' : 'btn'}
            onClick={() => {
              setScores(orderScore(levelsScores.hard));
              setRoundLevel('hard');
            }}
          >
            Hard
          </button>
        </div>
        <table className="score-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(({ id, player, score }) => (
              <tr
                key={id}
                className={winnerId === id ? 'score-table__winner-strip' : ''}
              >
                <td>{player}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Score;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Score = () => {
  const history = useHistory();
  const [scores, setScores] = useState([]);

  const levels = {
    easy: [
      {
        id: 'a1s-s2d-sa5',
        player: 'Ahmed Safi',
        score: '12356',
      },
    ],
    medium: [
      {
        id: 'a1s-s2d-sa6',
        player: 'Ahmed Safi',
        score: '12356',
      },
    ],
    hard: [
      {
        id: 'a1s-s2d-sa7',
        player: 'Ahmed Safi',
        score: '12356',
      },
    ],
  };

  return (
    <div>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
      <section>
        <h1>Top Scores</h1>
        <div>
          <button type="button" onClick={() => setScores(levels.easy)}>
            Easy
          </button>
          <button type="button" onClick={() => setScores(levels.medium)}>
            Medium
          </button>
          <button type="button" onClick={() => setScores(levels.hard)}>
            Hard
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map(({ id, player, score }) => (
              <tr key={id}>
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

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import Card from './Card';
import { names, cardsGenerator } from './CardsInfo';
import useTimer from './useTimer';

const Board = ({ level }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [eliminated, setEliminated] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { roundTime, setRoundTime } = useTimer(gameOver);

  useEffect(() => {
    setCards(cardsGenerator(names, level));
  }, [level]);

  const clear = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const isMatch = (id) => {
    const firstCard = cards.find((card) => card.id === flipped[0]);
    const secondCard = cards.find((card) => card.id === id);
    return firstCard.name === secondCard.name;
  };

  const success = (id) => {
    setEliminated([...eliminated, flipped[0], id]);
    clear();
  };

  const playAgain = () => {
    clear();
    setGameOver(false);
    setRoundTime(0);
    setCards(cardsGenerator(names, level));
  };

  const sameCard = (id) => flipped.includes(id);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
      return;
    }
    if (sameCard(id)) {
      setDisabled(false);
      return;
    }
    setFlipped([...flipped, id]);
    if (isMatch(id)) success(id);
    else setTimeout(() => clear(), 1000);
  };

  if (eliminated.length === level) {
    setEliminated([]);
    setGameOver(true);
  }

  return (
    <div>
      {gameOver ? (
        <div>
          <p>Congratulation , you won</p>
          <button type="button" className="game-start-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <div>{new Date(roundTime * 1000).toISOString().substr(11, 8)}</div>
          <div className="grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                flipped={flipped.includes(card.id)}
                eliminated={eliminated.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Board.propTypes = {
  level: propTypes.number.isRequired,
};

export default Board;

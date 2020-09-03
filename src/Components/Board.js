import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'prop-types';

import Cards from './Cards';
import { names, cardsGenerator } from './CardsInfo';
import useTimer from './useTimer';
import GameOver from './GameOver';

const Board = ({ level, cardsNum }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [eliminated, setEliminated] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { roundTime } = useTimer(gameOver);

  useEffect(() => {
    setCards(cardsGenerator(names, cardsNum));
  }, [cardsNum]);

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

  const memoizedHandleClick = useCallback(handleClick, [flipped]);

  if (eliminated.length === cardsNum) {
    setEliminated([]);
    setGameOver(true);
  }

  return (
    <div>
      {gameOver && (
        <GameOver duration={roundTime} cardsNum={cardsNum} level={level} />
      )}
      <div>
        <div>{new Date(roundTime * 1000).toISOString().substr(11, 8)}</div>
        <div className="grid">
          <Cards
            cards={cards}
            flipped={flipped}
            eliminated={eliminated}
            handleClick={memoizedHandleClick}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  level: propTypes.string.isRequired,
  cardsNum: propTypes.number.isRequired,
};

export default Board;

import React, { useState, useEffect } from 'react';

import Card from './Card';
import cardsGenerator from './CardsInfo';

const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [eliminated, setEliminated] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(cardsGenerator(names));
  }, []);

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
    setEliminated([]);
    clear();
    setCards(cardsGenerator(names));
  };

  const sameCard = (id) => id === flipped[0];

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setDisabled(false);
      setFlipped([id]);
      return;
    }
    if (sameCard(id)) return;
    setFlipped([...flipped, id]);
    if (isMatch(id)) success(id);
    else setTimeout(() => clear(), 1000);
  };

  return (
    <div>
      <div className={eliminated.length === 16 ? 'apper' : 'disapper'}>
        <p>Congratulation , you won</p>
        <button type="button" className="game-start-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className={eliminated.length === 16 ? 'disapper grid' : 'grid'}>
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
  );
};

export default Board;

import React, { useState, useEffect } from 'react';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [fliped, setFliped] = useState([]);
  const [eliminated, setEliminated] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // setCards(Generate(names));
    // to be uncomment when names array and Generate function are both ready
  }, []);

  const clear = () => {
    setFliped([]);
    setDisabled(false);
  };

  const isMatch = (id) => {
    const firstCard = cards.find((card) => card.id === fliped[0]);
    const secondCard = cards.find((card) => card.id === id);
    return firstCard.name === secondCard.name;
  };

  const success = (id) => {
    setEliminated([...eliminated, fliped[0], id]);
    clear();
  };

  const playAgain = () => {
    setEliminated([]);
    clear();
  };

  const handleClick = (id) => {
    setDisabled(true);
    if (fliped.length === 0) {
      setDisabled(false);
      setFliped([id]);
      return;
    }
    setFliped([...fliped, id]);
    if (isMatch(id)) success(id);
    else setTimeout(() => clear(), 1000);
  };

  return (
    <div>
      <div className={eliminated.length === 16 ? 'apper' : 'disapper'}>
        <p>Congratulation , you won</p>
        <button type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className={eliminated.length === 16 ? 'disapper grid' : 'grid'}>
        {/* {cards.map((card) => ({
           <Card
            key={card.id}
            id={card.id}
            name={card.name}
            fliped={fliped.includes(card.id)}
            eliminated={eliminated.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled}
          /> 
        }))} */}
        {/* to be uncomment when Card component is ready */}
      </div>
    </div>
  );
};

export default Board;

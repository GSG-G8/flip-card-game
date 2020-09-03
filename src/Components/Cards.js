import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = ({ cards, flipped, eliminated, handleClick, disabled }) => {
  return (
    <>
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
    </>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
  eliminated: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default React.memo(Cards);

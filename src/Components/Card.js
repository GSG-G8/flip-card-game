import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

const Card = ({ id, name, flipped, handleClick, eliminated, disabled }) => {
  return (
    <ReactCardFlip isFlipped={flipped || eliminated} flipDirection="horizontal">
      <div
        onClick={() => (disabled ? null : handleClick(id))}
        className="front"
      >
        front
      </div>

      <div className="back">
        <p>{name}</p>
      </div>
    </ReactCardFlip>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  eliminated: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Card;

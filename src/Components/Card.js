/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

import * as images from '../assets';

const Card = ({ id, name, flipped, handleClick, eliminated, disabled }) => {
  return (
    <ReactCardFlip isFlipped={flipped || eliminated} flipDirection="horizontal">
      <div
        onClick={() => (disabled ? null : handleClick(id))}
        className="back-card"
        style={{
          background: `url(${images.backCard})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div
        className="front-card"
        style={{
          background: `url(${images[name]})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />
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

export default React.memo(Card);

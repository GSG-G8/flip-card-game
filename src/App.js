import React from 'react';
import Card from './Components/Card';
import CardsInfo from './Components/CardsInfo';

import './App.css';

const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const handleClick = (id) => {
  console.log(id);
};

function App() {
  return (
    <div className="App">
      <h1>Flip Card Game</h1>
      {CardsInfo(names).map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          flipped={false}
          disabled={false}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;

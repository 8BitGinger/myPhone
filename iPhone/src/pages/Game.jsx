import React, { useState } from 'react';
import '../assets/styles/game.css';

const Game = () => {
  const [scoreX, setScoreX] = React.useState(0);
  const [scoreO, setScoreO] = React.useState(0);
  const [player, setPlayer] = React.useState('X');

  const handleClick = (e) => {
    let square = e.target;
    if (player === 'X') {
      square.innerText = 'X';
      setPlayer('O');
      setScoreX(scoreX + 1);
    } else {
      square.innerText = 'O';
      setPlayer('X');
      setScoreO(scoreO + 1);
    }
  };

  return (
    <div className="game-container">
      <h1>TicTacToe Game</h1>
      <div className="game-box">
        <div className="score">
          {scoreX} | {scoreO}
        </div>
        <div className="game-board">
          <div className="game-row">
            <button onClick={handleClick} className="game-square">
              {' '}
            </button>
            <button onClick={handleClick} className="game-square"></button>
            <button onClick={handleClick} className="game-square"></button>
          </div>
          <div className="game-row">
            <button onClick={handleClick} className="game-square">
              {' '}
            </button>
            <button onClick={handleClick} className="game-square"></button>
            <button onClick={handleClick} className="game-square"></button>
          </div>
          <div className="game-row">
            <button onClick={handleClick} className="game-square">
              {' '}
            </button>
            <button onClick={handleClick} className="game-square"></button>
            <button onClick={handleClick} className="game-square"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

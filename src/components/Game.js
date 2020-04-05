import React, {useState} from 'react';
import Board from '../components/Board';
import {buildBoard, PLAYERS} from '../utils/constants';

const Game = () => {
  const [boardState, setBoardState] = useState(buildBoard());
  const [isXNext, setIsXNext] = useState(false);

  const turn = (squareIdx) => {
    const squares = [...boardState];

    squares[squareIdx] = {
      ...squares[squareIdx],
      value: isXNext ? PLAYERS.O : PLAYERS.X,
      isFilled: true,
    };

    setBoardState(squares);
    setIsXNext(!isXNext);
  };

  const handlePress = (squareIdx) => {
    turn(squareIdx);
  };

  return <Board squares={boardState} onSquarePress={handlePress} />;
};

export default Game;

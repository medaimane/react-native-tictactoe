import React, {useState} from 'react';
import Board from '../components/Board';
import Status from '../components/Status';
import {PLAYERS, STATUS} from '../utils/constants';
import {buildBoard} from '../utils/utils';

const Game = () => {
  const [squares, setSquares] = useState(buildBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState(STATUS.PLAY);

  const turn = (squareIdx, player) => {
    const cells = [...squares];
    cells[squareIdx] = {
      ...cells[squareIdx],
      value: player,
      isFilled: true,
    };
    setSquares(cells);
  };

  const handlePress = (squareIdx) => {
    const player = isXNext ? PLAYERS.X : PLAYERS.O;
    turn(squareIdx, player);
    setIsXNext(!isXNext);
  };

  return (
    <>
      <Board squares={squares} onSquarePress={handlePress} />
      <Status status={status} player={isXNext ? PLAYERS.X : PLAYERS.O} />
    </>
  );
};

export default Game;

import React, {useState, useEffect} from 'react';
import Board from '../components/Board';
import Status from '../components/Status';
import {PLAYERS, STATUS} from '../utils/constants';
import {buildBoard, calculateWinner} from '../utils/utils';

const Game = () => {
  const [squares, setSquares] = useState(buildBoard());
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState(STATUS.PLAY);

  const current = () => (isXNext ? PLAYERS.X : PLAYERS.O);

  const player = () => {
    if (status === STATUS.PLAY) {
      return current();
    }

    return isXNext ? PLAYERS.O : PLAYERS.X;
  };

  const turn = (squareIdx) => {
    const cells = [...squares];
    cells[squareIdx] = {
      ...cells[squareIdx],
      value: current(),
      isFilled: true,
    };
    setSquares(cells);
  };

  const handlePress = (squareIdx) => {
    turn(squareIdx);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const cells = squares;
    const {winner, combination} = calculateWinner(cells);

    if (winner && combination) {
      combination.forEach((idx) => {
        cells[idx] = {
          ...cells[idx],
          isWin: true,
        };
      });
      cells.forEach((c) => (c.isFilled = true));

      setStatus(STATUS.WIN);
      setSquares(cells);
    } else {
      const isAllFilled = !cells.some((cell) => !cell.isFilled);
      if (isAllFilled) {
        setStatus(STATUS.DRAW);
      }
    }
  }, [squares]);

  return (
    <>
      <Board squares={squares} onSquarePress={handlePress} />
      <Status status={status} player={player()} />
    </>
  );
};

export default Game;

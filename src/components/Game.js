import React, {useState, useEffect} from 'react';
import Board from '../components/Board';
import Status from '../components/Status';
import ReplayButton from '../components/ReplayButton';
import {PLAYERS, STATUS} from '../utils/constants';
import {buildBoard, calculateWinner} from '../utils/utils';

const initialState = {
  squares: buildBoard(),
  isXNext: true,
  status: STATUS.INIT,
};

const Game = () => {
  const [squares, setSquares] = useState(initialState.squares);
  const [isXNext, setIsXNext] = useState(initialState.isXNext);
  const [status, setStatus] = useState(initialState.status);

  const reInit = () => {
    setSquares(initialState.squares);
    setIsXNext(initialState.isXNext);
    setStatus(initialState.status);
  };

  const isEnd = () => status === STATUS.DRAW || status === STATUS.WIN;

  const current = () => (isXNext ? PLAYERS.X : PLAYERS.O);

  const player = () =>
    isEnd() ? (isXNext ? PLAYERS.O : PLAYERS.X) : current();

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
    setStatus(STATUS.PLAY);
    turn(squareIdx);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const winning = (combination) => {
      setStatus(STATUS.WIN);

      const cells = [...squares];
      combination.forEach((idx) => {
        cells[idx] = {
          ...cells[idx],
          isWin: true,
        };
      });

      setSquares(cells.map((cell) => ({...cell, isFilled: true})));
    };

    const checkIfDraw = () => {
      const isAllCellFilled = !squares.some((s) => !s.isFilled);
      isAllCellFilled && setStatus(STATUS.DRAW);
    };

    if (status === STATUS.PLAY) {
      const {winner, combination} = calculateWinner(squares);
      winner ? winning(combination) : checkIfDraw();
    }
  }, [squares, status]);

  return (
    <>
      <Board squares={squares} onSquarePress={handlePress} />
      <Status status={status} player={player()} />
      {isEnd() && <ReplayButton onPress={reInit} />}
    </>
  );
};

export default Game;

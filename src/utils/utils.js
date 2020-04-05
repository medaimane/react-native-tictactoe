const buildCell = () => ({
  value: '.',
  isFilled: false,
  isWin: false,
});

export const buildBoard = () => Array(9).fill(buildCell);

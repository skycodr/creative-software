const Logic = (boardSize, cellSize) => {
  let round;
  let totalScore;
  let roundScore;
  let oscillation = -1;
  const timer = null;

  return {
    init: () => {
      round = 1;
      totalScore = 0;
      roundScore = 0;
    },
    newGame: () => {
      ++round;
      roundScore = 0;
    },
    getBoard: () => {

    },
  };
};
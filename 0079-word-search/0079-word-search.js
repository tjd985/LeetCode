/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const dfs = (start) => {
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];

    const MAX_X = board.length - 1;
    const MAX_Y = board[0].length - 1;

    const inner = (currentX, currentY, index) => {
      if (index === word.length) {
        return true;
      }

      if (
        currentX < 0 ||
        currentX > MAX_X ||
        currentY < 0 ||
        currentY > MAX_Y || 
        board[currentX][currentY] !== word[index]
      ) {
        return false;
      }

      const temp = board[currentX][currentY];

      board[currentX][currentY] = null;

      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];

        if (inner(nextX, nextY, index + 1)) {
          return true;
        }
      }

      board[currentX][currentY] = temp;

      return false;
    }

    return inner(start[0], start[1], 0);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const str = board[i][j];

      if (str === word[0]) {
        if (dfs([i, j])) {
          return true;
        }
      }
    }
  }

  return false;
};
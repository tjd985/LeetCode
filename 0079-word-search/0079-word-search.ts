function exist(board: string[][], word: string): boolean {
  const moveX = [-1, 0, 1, 0];
  const moveY= [0, -1, 0, 1];

  const MAX_X = board.length - 1;
  const MAX_Y = board[0].length - 1;

  const dfs = (current, index) => {
    if (index === word.length) {
      return true;
    }

    const [currentX, currentY] = current;

    const temp = board[currentX][currentY];

    board[currentX][currentY] = null;

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const cantGo = 
        nextX < 0 ||
        nextX > MAX_X ||
        nextY < 0 ||
        nextY > MAX_Y ||
        board[nextX][nextY] === null ||
        board[nextX][nextY] !== word[index];

      if (cantGo) {
        continue;
      }

      const result = dfs([nextX, nextY], index + 1);

      if (result) {
        return true;
      }
    }

    board[currentX][currentY] = temp;

    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs([i, j], 1)) {
          return true;
        }
      }
    }
  }

  return false;
};
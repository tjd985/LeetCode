/**
 * @param {number[][]} grid
 * @return {number}
 */
function bfs(start, grid) {
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];

  const MAX_X = grid.length - 1;
  const MAX_Y = grid[0].length - 1;

  const queue = [start];

  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    const currentRottenTime = grid[currentX][currentY];

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const cantGo =
        nextX < 0 ||
        nextX > MAX_X ||
        nextY < 0 ||
        nextY > MAX_Y ||
        grid[nextX][nextY] === 0;

      if (cantGo) {
        continue;
      }

      if (grid[nextX][nextY] === 1) {
        queue.push([nextX, nextY]);
        grid[nextX][nextY] = currentRottenTime + 1;

        continue;
      }

      if (grid[nextX][nextY] > currentRottenTime) {
        queue.push([nextX, nextY]);
        grid[nextX][nextY] = currentRottenTime + 1;
      }
    }
  }
}

var orangesRotting = function(grid) {
  const rottenTime = {};

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        bfs([i, j], grid);
      }
    }
  }

  let maxTime = 2;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const current = grid[i][j];
      if (current === 1) {
        return -1;
      }

      maxTime = Math.max(maxTime, current);
    }
  }

  return maxTime - 2;
};
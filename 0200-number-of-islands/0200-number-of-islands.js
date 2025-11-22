/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = (grid, start) => {
  const stack = [start];
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];

  const MAX_X = grid.length - 1;
  const MAX_Y = grid[0].length - 1;

  while (stack.length) {
    const [currentX, currentY] = stack.pop();

    for (let i = 0; i < 4; i ++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const cantMove = 
        nextX < 0 ||
        nextX > MAX_X ||
        nextY < 0 ||
        nextY > MAX_Y ||
        grid[nextX][nextY] === '0';
      
      if (cantMove) {
        continue;
      }

      grid[nextX][nextY] = '0';
      stack.push([nextX, nextY]);
    }
  }
}

var numIslands = function(grid) {
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') {
        continue;
      }

      grid[i][j] = '0';
      answer++;

      dfs(grid, [i, j]);
    }
  }

  return answer;
};
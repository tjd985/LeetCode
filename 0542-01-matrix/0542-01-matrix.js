/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const queue = [];
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      }

      if (mat[i][j] !== 0) {
        mat[i][j] = Infinity;
      }
    }
  }

  while (queue.length) {
    const [currentX, currentY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const cantGo = nextX < 0 ||
        nextX > mat.length - 1 ||
        nextY < 0 ||
        nextY > mat[0].length - 1 ||
        mat[nextX][nextY] <= mat[currentX][currentY] + 1;

      if (cantGo) {
        continue;
      }

      mat[nextX][nextY] = mat[currentX][currentY] + 1;
      queue.push([nextX, nextY]);
    }
  }

  return mat;
};
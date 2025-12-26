function updateMatrix(mat: number[][]): number[][] {
  const queue = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const value = mat[i][j];

      if (!value) {
        queue.push([i, j]);

        continue;
      }

      mat[i][j] = Infinity;
    }
  }

  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  const MAX_X = mat.length - 1;
  const MAX_Y = mat[0].length - 1;

  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    const currentValue = mat[currentX][currentY];

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];

      const cantGo = 
        nextX < 0 ||
        nextX > MAX_X ||
        nextY < 0 ||
        nextY > MAX_Y ||
        mat[nextX][nextY] <= currentValue;

      if (cantGo) {
        continue;
      }

      mat[nextX][nextY] = currentValue + 1;
      queue.push([nextX, nextY]);
    }
  }

  return mat;
};
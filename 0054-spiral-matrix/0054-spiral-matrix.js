/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const answer = [];
  const nextDirectionMap = {
    'r': 'd',
    'd': 'l',
    'l': 'u',
    'u': 'r',
  };

  const MAX_X = matrix.length - 1;
  const MAX_Y = matrix[0].length - 1;

  let currentX = 0;
  let currentY = 0;

  let direction = 'r';

  function validate([x, y]) {
    return (
      x >= 0 &&
      x <= MAX_X &&
      y >= 0 &&
      y <= MAX_Y &&
      matrix[x][y] !== null
    );
  }

  function move(x, y, direction) {
    switch (direction) {
      case 'r':
        return [x, y + 1];

      case 'd':
        return [x + 1, y];

      case 'l':
        return [x, y - 1];

      case 'u':
        return [x - 1, y];
    }
  }

  while (true) {
    answer.push(matrix[currentX][currentY]);
    matrix[currentX][currentY] = null;

    const [nextX, nextY] = move(currentX, currentY, direction);

    if (validate([nextX, nextY])) {
      currentX = nextX;
      currentY = nextY;

      continue;
    }

    const [changeX, changeY] = move(currentX, currentY, nextDirectionMap[direction]);
    if (validate([changeX, changeY])) {
      direction = nextDirectionMap[direction];
      currentX = changeX;
      currentY = changeY;

      continue;
    }

    console.log('end');

    break;
  }

  return answer;
};
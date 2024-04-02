/**
* @param {number[][]} image
* @param {number} sr
* @param {number} sc
* @param {number} color
* @return {number[][]}
*/
const floodFill = function(image, sr, sc, color) {
  const moveX = [-1, 0, 1, 0];
  const moveY = [0, -1, 0, 1];
  const isVisit = new Array(image.length)
       .fill(null)
       .map((value) => new Array(image[0].length)
       .fill(false));
  const stack = [[sr, sc]];
  const startColor = image[sr][sc];

  while(stack.length) {
    const [currentX, currentY] = stack.pop();

    isVisit[currentX][currentY] = true;
    image[currentX][currentY] = color;

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + moveX[i];
      const nextY = currentY + moveY[i];
      const isValid = nextX < image.length &&
            nextX < image[0].length &&
            nextX >=0 &&
            nextY >= 0 &&
            image[nextX][nextY] === startColor &&
            !isVisit[nextX][nextY];

      if (!isValid) {
        continue;
      }

      stack.push([nextX, nextY]);
    }
  }

  return image;
}
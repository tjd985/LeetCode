/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
  let [startWidth, endWidth, startHeight, endHeight] = [Infinity, null, Infinity, null];
  const isVisit = Array.from({length: grid.length}, (value) => new Array(grid[0].length).fill(false));
  isVisit[0][0] = true;
  
  function DFS(currentWidth, currentHeight) {
    const stack = [[currentWidth, currentHeight]];
    const moveX = [0, -1, 0, 1];
    const moveY = [-1, 0, 1, 0];
    
    while (stack.length) {
      const [currentWidth, currentHeight] = stack.shift();
      
      if (grid[currentWidth][currentHeight]) {
        startWidth =  startWidth > currentWidth ? currentWidth : startWidth;
        startHeight = startHeight > currentHeight ? currentHeight : startHeight;

        endWidth =  endWidth < currentWidth ? currentWidth : endWidth;
        endHeight = endHeight < currentHeight ? currentHeight : endHeight;
      }
      
      for (let i = 0; i < 4; i++) {
        const nextWidth = currentWidth + moveX[i];
        const nextHeight = currentHeight + moveY[i];
        
        const cantMove = nextWidth < 0 ||
              nextWidth >= grid.length ||
              nextHeight < 0 ||
              nextHeight >= grid[0].length ||
              isVisit[nextWidth][nextHeight];
        
        if (cantMove) {
          continue;
        }
        
        isVisit[nextWidth][nextHeight] = true;
        stack.push([nextWidth, nextHeight]);
      }
    }
  }
  
  DFS(0, 0);
  
  return (endWidth - startWidth + 1) * (endHeight - startHeight + 1);
};
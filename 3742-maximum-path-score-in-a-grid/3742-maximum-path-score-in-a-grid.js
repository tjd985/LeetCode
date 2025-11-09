function maxPathScore(grid, k) {
  const costMap = [0, 1, 1];
  let answer = -1;
  
  const dp = new Array(grid.length)
  .fill(null).map((row) => new Array(grid[0].length)
                  .fill(null).map((row2) => new Array(k + 1).fill(-1)));
  
  dp[0][0][0] = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      for (let cost = 0; cost <= k; cost++) {
        const currentValue = dp[i][j][cost];
        
        if (currentValue === -1) {
          continue;
        }
        
        // move down
        if (i + 1 < grid.length) {
          const nextCost = cost + costMap[grid[i + 1][j]];
          
          if (nextCost <= k) {
            const nextValue = currentValue + grid[i + 1][j];
            
            dp[i + 1][j][nextCost] = Math.max(nextValue, dp[i + 1][j][nextCost]);
          }
        }
        
        // move right
        if (j + 1 < grid[0].length) {
          const nextCost = cost + costMap[grid[i][j + 1]];
          
          if (nextCost <= k) {
            const nextValue = currentValue + grid[i][j + 1];
            
            dp[i][j + 1][nextCost] = Math.max(nextValue, dp[i][j + 1][nextCost]);
          }
        }
      }
    }
  }
  
  const goalX = grid.length - 1;
  const goalY = grid[0].length - 1;
  
  for (let i = 0; i <= k; i++) {
    answer = Math.max(answer, dp[goalX][goalY][i]);
  }
  
  return answer;
}
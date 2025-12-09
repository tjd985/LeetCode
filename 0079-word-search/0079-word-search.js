/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const dfs = (start) => {
    const isVisit = {};
    const MAX_X = board.length - 1;
    const MAX_Y = board[0].length - 1;
    const moveX = [-1, 0, 1, 0];
    const moveY = [0, -1, 0, 1];
    
    const inner = (currentX, currentY, index) => {
      // 단어를 모두 찾은 경우
      if (index === word.length) {
        return true;
      }
      
      // 범위 체크 및 문자 매칭 체크
      const cantGo = currentX < 0 || currentX > MAX_X || currentY < 0 || currentY > MAX_Y;
      if (cantGo || board[currentX][currentY] !== word[index] || isVisit[`${currentX}${currentY}`]) {
        return false;
      }
      
      // 현재 위치 방문 표시
      isVisit[`${currentX}${currentY}`] = true;
      
      // 4방향 탐색
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + moveX[i];
        const nextY = currentY + moveY[i];
        
        if (inner(nextX, nextY, index + 1)) {
          return true;
        }
      }
      
      // 백트래킹: 방문 표시 해제
      isVisit[`${currentX}${currentY}`] = false;
      return false;
    }
    
    return inner(start[0], start[1], 0);
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (dfs([i, j])) {
          return true;
        }
      }
    }
  }
  
  return false;
};
/**
 * @param {number[]} balance
 * @return {number}
 */
var minMoves = function(balance) {
  const twoPointer = (targetValue, initialIndex) => {
    let count = 0;
    
    let leftIndex = initialIndex - 1 < 0 ? balance.length - 1 : initialIndex - 1;
    let rightIndex = (initialIndex + 1) % balance.length;

    for (let i = 1; i < balance.length; i++) {
      if (targetValue === 0) {
        return count;
      }
      
      const leftValue = balance[leftIndex];
      const rightValue = balance[rightIndex];

      if (leftValue > 0 && targetValue !== 0) {
        const minValue = Math.min(leftValue, Math.abs(targetValue));
        
        targetValue += minValue;

        count += i * minValue;
      }

      if (rightValue > 0 && targetValue !== 0) {
        const minValue = Math.min(rightValue, Math.abs(targetValue));
        
        targetValue += minValue;

        count += i * minValue;
      }

      leftIndex = leftIndex === 0 ? balance.length - 1 : leftIndex - 1;
      rightIndex = (rightIndex + 1) % balance.length;
    }

    return count;
  }
  
  const sum = balance.reduce((acc, cur) => acc + cur, 0);

  if (sum < 0) {
    return -1;
  }

  let answer = 0;

  for (let i = 0; i < balance.length; i++) {
    const current = balance[i];

    if (current < 0) {
      answer += twoPointer(current, i);
    }
  }

  return answer;
};
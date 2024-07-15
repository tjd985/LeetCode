/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
  let horizontalCuttingCount = 1;
  let verticalCuttingCount = 1;
  let result = 0;
  
  horizontalCut.sort((a, b) => a - b);
  verticalCut.sort((a, b) => a - b);
  
  while (horizontalCut.length && verticalCut.length) {
    const horizonMaxValue = horizontalCut[horizontalCut.length - 1];
    const verticalMaxValue = verticalCut[verticalCut.length - 1];
    
    if (horizonMaxValue >= verticalMaxValue) {
      result += horizonMaxValue * verticalCuttingCount;
      horizontalCuttingCount++;
      
      horizontalCut.pop();
      
      continue;
    }
    
    result += verticalMaxValue * horizontalCuttingCount;
    verticalCuttingCount++;
    
    verticalCut.pop();
  }
  
  for (const horizontalValue of horizontalCut) {
    result += horizontalValue * verticalCuttingCount;
  }
  
  for (const verticalValue of verticalCut) {
    result += verticalValue * horizontalCuttingCount;
  }
  
  return result;
};
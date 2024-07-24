/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
  if (n === k) {
    return 0;
  }
  
  let binaryN = n.toString(2);
  let binaryK = k.toString(2);
  const paddingCount = Math.abs(binaryN.length - binaryK.length);
  let result = 0;
  
  if (binaryN.length > binaryK.length) {
    binaryK = "0".repeat(paddingCount) + binaryK;
  } else {
    binaryN = "0".repeat(paddingCount) + binaryN;
  }
  
  console.log(binaryN, binaryK)
  
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === binaryK[i]) {
      continue;
    }
    
    if (binaryN[i] === "1") {
      result++;
    } else {
      return -1;
    }
  }
  
  return result;
};
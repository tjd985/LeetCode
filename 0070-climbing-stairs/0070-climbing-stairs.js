/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const length = Math.ceil(n / 2);
  let twoCount = 0;
  let result = 0;
  
  for (let i = n; i >= length; i--) {
    result += factorial(i) / (factorial(twoCount) * factorial(i - twoCount));
    
    twoCount++;
  }
  
  return result;
};

function factorial(n) {
  let result = 1;
  
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
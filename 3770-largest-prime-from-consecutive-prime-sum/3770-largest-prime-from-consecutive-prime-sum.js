/**
 * @param {number} n
 * @return {number}
 */
var largestPrime = function(n) {
  if (n === 2) {
    return 2;
  }
  
  const isPrimeList = new Array(n + 1).fill(true);
  isPrimeList[0] = false;
  isPrimeList[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrimeList[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrimeList[j] = false;
      }
    }
  }

  const primeList = [];
  const primeMap = {};
  isPrimeList.forEach((value, index) => {
    if (value) {
      primeMap[index] = true;
      primeList.push(index);
  }});

  let answer = 0;
  
  primeList.reduce((acc, cur) => {
    const sum = acc + cur;
    
    if (primeMap[sum] && sum <= n) {
      answer = sum;
    }
    
    return sum;
  }, 0);

  return answer;
};
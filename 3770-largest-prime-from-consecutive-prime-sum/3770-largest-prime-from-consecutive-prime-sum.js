var largestPrime = function(n) {
  if (n < 2) return 0;
  if (n === 2) return 2;
  
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
  isPrimeList.forEach((value, index) => {
    if (value) {
      primeList.push(index);
    }
  });

  const primeSet = new Set(primeList);
  let answer = 0;
  
  primeList.reduce((acc, cur) => {
    const sum = acc + cur;
    
    if (primeSet.has(sum) && sum <= n) {
      answer = sum;
    }
    
    return sum;
  }, 0);

  return answer;
};
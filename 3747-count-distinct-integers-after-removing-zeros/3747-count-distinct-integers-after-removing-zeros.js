/**
 * @param {number} n
 * @return {number}
 */
var countDistinct = function(n) {
  const targetNumber = String(n);
  const powList = new Array(16).fill(1);
  const totalLength = targetNumber.length;
  let answer = 0;

  for (let i = 1; i < 16; i++) {
    powList[i] = powList[i - 1] * 9;
  }

  for (let i = 1; i < totalLength; i++) {
    answer += powList[i];
  }

  let isReachEnd = false;

  for (let i = 0; i < totalLength; i++) {
    const currentNumber = Number(targetNumber[i]);

    if (currentNumber === 0) {
      break;
    }

    for (let j = 1; j < currentNumber; j++) {
      answer += powList[totalLength - i - 1];
    }

    if (i === totalLength - 1) {
      isReachEnd = true;
    }
  }

  return answer + (isReachEnd ? 1 : 0);
};
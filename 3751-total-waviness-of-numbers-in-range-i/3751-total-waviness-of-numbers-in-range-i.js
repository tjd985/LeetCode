/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
  const dp = {};
  let answer = 0;

  for (let i = num1; i <= num2; i++) {
    const current = i.toString();

    for (let j = 0; j < current.length - 2; j++) {
      if (dp[j]) {
        continue;
      }

      dp[current] = true;

      const first = Number(current[j]);
      const second = Number(current[j + 1]);
      const third = Number(current[j + 2]);

      const isPeak = second > first && second > third;
      const isValley = second < first && second < third;

      if (isPeak || isValley) {
        answer += 1;

        continue;
      }
    }
  }

  return answer;
};
function residuePrefixes(s: string): number {
  const dp = {};
  let distinctLength = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (!dp[current]) {
      distinctLength++;
      dp[current] = true;
    }

    const rest = (i + 1) % 3;

    if (rest === distinctLength) {
      answer++;
    }
  }

  return answer;
};
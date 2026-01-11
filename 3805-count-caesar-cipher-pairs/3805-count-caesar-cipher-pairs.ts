function countPairs(words: string[]): number {
  const initialCode = 'a'.charCodeAt(0);
  let answer = 0;

  const normalize = (word) => {
    const firstWordCode = word.charCodeAt(0);
    let result = '';

    for (let i = 0; i < word.length; i++) {
      const currentWordCode = word.charCodeAt(i);
      const diff = (currentWordCode - firstWordCode + 26) % 26;

      result += String.fromCharCode(initialCode + diff);
    }

    return result;
  }

  const combinationTwo = (num: number) => {
    return num * (num - 1) / 2;
  }

  const dp = {};

  for (const word of words) {
    dp[normalize(word)] = (dp[normalize(word)] ?? 0) + 1;
  }

  for (const key in dp) {
    const count: number = dp[key];

    if (count > 1) {
      answer += combinationTwo(count);
    }
  }

  return answer;
};
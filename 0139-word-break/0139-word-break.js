/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function findSubString(string, wordDict) {
  const dictLengthList = [];

  wordDict.forEac((word) => {
    if (string.includes(word)) {
      dictLengthList.push(word.length);
    }
  });

  return dictLengthList;
}

var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      const wordLength = word.length;

      if (s.slice(i - wordLength, i) === word && dp[i - wordLength]) {
        dp[i] = true;
      }
    }
  }

  return dp[dp.length - 1];
};
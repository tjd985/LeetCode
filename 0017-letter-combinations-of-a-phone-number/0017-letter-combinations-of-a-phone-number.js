/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const answer = [];

  function dfs(current, index) {
    if (index >= digits.length) {
      answer.push(current);

      return;
    }

    const stringList = map[digits[index]];

    for (const string of stringList) {
      dfs(current + string, index + 1);
    }
  }

  dfs('', 0);

  return answer;
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let answer = '';

  const getPalindrom = (left, right) => {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const oddPalindrom = getPalindrom(i, i);
    const evenPalindrom = getPalindrom(i, i + 1);

    if (oddPalindrom.length > answer.length) {
      answer = oddPalindrom;
    }

    if (evenPalindrom.length > answer.length) {
      answer = evenPalindrom;
    }
  }

  return answer;
};
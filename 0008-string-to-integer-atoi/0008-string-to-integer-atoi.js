/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let meetNumber = false;
  let meetOperator = false;
  let operator = '';
  let number = '';

  for (let i = 0; i < s.length; i++) {
    if (!operator && !number && s[i] === ' ') {
      continue;
    }

    if (!operator && !number && (s[i] === '-' || s[i] === "+")) {
      operator = s[i];

      continue;
    }

    if (s[i] !== ' ' && Number(s[i]) < 10) {
      if (!operator) {
        operator = '+';
      }

      number += s[i];

      continue;
    }

    break;
  }

  const maxNum = operator === '-' ? Math.pow(2, 31) : Math.pow(2, 31) - 1;
  const num = Math.min(maxNum, Number(number));

  return num ? operator === '-' ? -num : num : 0;
};
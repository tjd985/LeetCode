/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const findPermutationDifference = function (s, t) {
  const sObj = {};
  const tObj = {};
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = i;
    tObj[t[i]] = i;
  }
  
  for (let i = 0; i < s.length; i++) {
    result += Math.abs(sObj[s[i]] - tObj[s[i]]);
  }
  
  return result;
};
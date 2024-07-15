/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
  function isOdd(num) {
    return num % 2;
  }
  
  for (let i = 0; i < s.length - 1; i++) {
    const isPair = isOdd(Number(s[i])) === isOdd(Number(s[i + 1]));
    
    if (Number(s[i]) > Number(s[i + 1]) && isPair) {
      const sList = s.split("");
      
      [sList[i], sList[i + 1]] = [sList[i + 1], sList[i]];
      
      return sList.join("");
    }
  }
  
  return s;
};
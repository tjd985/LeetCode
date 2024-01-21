/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  const value = Math.floor(word.length / 8);
  const rest = word.length % 8;
  let result = 0;
  
  if (!value) {
    return word.length;
  }
  
  for (let i = 1; i <= value; i++) {
    result += i * 8;
    
    if (rest && i === value) {
      result += (i + 1) * rest;
    }
  }
  
  return result;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const characters = {};
  
  for (const character of s) {
    characters[character] = characters[character] ? characters[character] + 1 : 1;
  }
  
  for (const targetCharacter of t) {
    characters[targetCharacter] -= 1;
    
    if (isNaN(characters[targetCharacter]) || characters[targetCharacter] < 0) {
      return false;
    }
  }
  
  return true;
};
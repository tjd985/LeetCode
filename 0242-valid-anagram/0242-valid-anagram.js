/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const stringMap = new Map();
  
  for (const character of s) {
    const index = stringMap.get(character);
    
    if (index) {
      stringMap.set(character, index + 1);
    } else {
      stringMap.set(character, 1);
    }
  }
  
  for (const targetCharacter of t) {
    const index = stringMap.get(targetCharacter);
    
    if (!index) {
      return false;
    }
    
    stringMap.set(targetCharacter, index - 1);
  }
  
  return true;
};
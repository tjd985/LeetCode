/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const characterList = {};
  
  for (const character of magazine) {
    characterList[character] = characterList[character] ? characterList[character] + 1 : 1;
  }
  
  for (const targetCharacter of ransomNote) {
    const isExist = !!characterList[targetCharacter];
    
    if (!isExist) {
      return false;
    }
    
    characterList[targetCharacter] -= 1;
  }
  
  return true;
};
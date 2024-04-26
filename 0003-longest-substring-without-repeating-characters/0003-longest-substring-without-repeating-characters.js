/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let currentString = "";
  let maxLength = 0;
  const currentCharacter = {};
  
  for (let i = 0; i < s.length; i++) {
    const targetCharacter = s[i];
    
    if (currentCharacter[targetCharacter]) {
      delete currentCharacter[targetCharacter];
      
      for (let i = currentString.length - 1; i >= 0; i--) {
        const currentCharacter = currentString[i];
        
        if (currentCharacter === targetCharacter) {
          currentString = currentString.slice(i + 1);
          
          break;
        }
      }
    }
    
    currentString += targetCharacter;
    currentCharacter[targetCharacter] = (currentCharacter[targetCharacter] || 0) + 1;
    
    if (currentString.length >= maxLength) {
        maxLength = currentString.length;
      }
  }
  
  return maxLength ? maxLength : currentString.length;
};
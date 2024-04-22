/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function(word) {
  const wordObject = {};
  const result = new Set();
  
  function isUpperCase(character) {
    return character === character.toUpperCase();
  }
  
  for (const character of word) {
    const isUpper = isUpperCase(character);
    const upperCase = character.toUpperCase();
    const lowerCase = character.toLowerCase();
    
    wordObject[character] = true;
    
     if (isUpper) {
       if (wordObject[lowerCase]) {
         result.add(lowerCase);
       }
       
       continue;
     }
    
    if (wordObject[upperCase]) {
       result.add(lowerCase);
     }
  }
  
  return result.size;
};
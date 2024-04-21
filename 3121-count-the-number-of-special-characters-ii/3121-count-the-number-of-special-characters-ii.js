/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function(word) {
  const wordObject = {};
  const invalidCharacter = {};
  let result = new Set();
  
  function isUpperCase(character) {
    return character === character.toUpperCase();
  }
  
  for (const character of word) {
    const isUpper = isUpperCase(character);
    const lowerCase = character.toLowerCase();
    
    wordObject[character] = true;
    
     if (isUpper) {
       if (!wordObject[lowerCase]) {
         invalidCharacter[lowerCase] = true;
       }
       
       if (!invalidCharacter[lowerCase]) {
         result.add(lowerCase);
       }
       
       continue;
     }
    
    if (result.has(character)) {
      result.delete(character);
      
      invalidCharacter[character] = true;
    }
  }
  
  return result.size;
};
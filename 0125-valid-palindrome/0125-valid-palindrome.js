function validCharacter(character) {
  const isValidRange = 
        97 <= character.charCodeAt() &&
        character.charCodeAt() <= 122 ||
        48 <= character.charCodeAt() &&
        character.charCodeAt() <= 57;
  
  if (isValidRange) {
    return true;
  }

  return false;
}

const isPalindrome = function(s) {
  const lowerString = s.toLowerCase();
  const stack = [];
  let editString = "";
  
  for (const character of lowerString) {
    if (!validCharacter(character)) {
      continue;
    }
    
    editString += character;
  }
  
  if (editString <= 1) {
    return true;
  }
  
  const middleIndex = Math.floor(editString.length / 2);
  
  for (let i = 0; i < editString.length; i++) {
    if (editString.length % 2 !== 0 && i === middleIndex) {
      continue;
    }
    
    if (i < middleIndex) {
      stack.push(editString[i]);
      
      continue;
    }
    
    if (stack[stack.length - 1] !== editString[i]) {
      return false;
    }
    
    stack.pop();
  }
  
  return true;
};
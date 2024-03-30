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
  let editString = "";
  
  for (const character of lowerString) {
    if (!validCharacter(character)) {
      continue;
    }
    
    editString += character;
  }
  
  for (let i = 0 ; i < Math.ceil(editString.length) / 2; i++) {
    const head = i;
    const tail = editString.length - i - 1;
    
    if (head >= tail) {
      return true;
    }
    
    if (editString[head] !== editString[tail]) {
      return false;
    }
  }
  
  return true;
};
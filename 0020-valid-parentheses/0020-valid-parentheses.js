const isValid = function(s) {
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  const stack = [];
  
  for (const character of s) {
    if (!stack.length) {
      stack.push(character);
      
      continue;
    }
    
    const topValue = stack[stack.length - 1];

    if ( character === pair[topValue]) {
      stack.pop();
      
      continue;
    }
    
    stack.push(character);
  }
  
  return stack.length ? false : true;
};
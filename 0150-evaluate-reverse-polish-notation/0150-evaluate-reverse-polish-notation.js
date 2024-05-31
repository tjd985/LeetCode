/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
  const stack = [];
  const OPERATOR = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };
  
  for (const token of tokens) {
    if (OPERATOR[token]) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      let result = eval(num2 + " " + token + " " + num1);
      
      result = result < 0 ? Math.ceil(result) : Math.floor(result);
      
      stack.push(result);
      
      continue;
    }
    
    stack.push(token);
  }
  
  return Number(stack[0]);
};
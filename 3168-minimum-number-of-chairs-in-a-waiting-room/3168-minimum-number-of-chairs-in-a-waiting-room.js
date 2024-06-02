/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  const stack = [];
  let maxLength = 0;
  
  for (const status of s) {
    if (status === "E") {
      stack.push(1);
    } else {
      stack.pop();
    }
    
    maxLength = maxLength < stack.length ? stack.length : maxLength;
  }
  
  return maxLength;
};
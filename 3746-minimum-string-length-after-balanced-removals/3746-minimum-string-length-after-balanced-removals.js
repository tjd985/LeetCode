/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function(s) {
    const stack = [];

  for (const str of s) {
    if (!stack.length || stack[stack.length - 1] === str) {
      stack.push(str);

      continue;
    }

    stack.pop();
  }

  return stack.length;
};
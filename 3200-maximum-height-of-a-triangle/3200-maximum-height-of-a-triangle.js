/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
const maxHeightOfTriangle = function(red, blue) {
  let maxDepth = 0;
  
  function makeTree(red, blue, prevColor, depth) {
    if (prevColor === "blue") {
      if (red < depth) {
        maxDepth = Math.max(depth - 1, maxDepth);
        
        return;
      }
      
      makeTree(red - depth, blue, "red", depth + 1);
    }

    if (prevColor === "red") {
      if (blue < depth) {
        maxDepth = Math.max(depth - 1, maxDepth);
        
        return;
      }
      
      makeTree(red, blue - depth, "blue", depth + 1);
    }
  }
  
  makeTree(red, blue, "blue", 0);
  makeTree(red, blue, "red", 0);
  
  return maxDepth;
};
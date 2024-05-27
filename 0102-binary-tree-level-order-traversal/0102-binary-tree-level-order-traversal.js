/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  
  function search(node, level) {
    if (!node) {
      return;
    }
    
    if (!result[level]) {
      result[level] = [];
    }
    
    result[level].push(node.val);
    
    search(node.left, level + 1);
    search(node.right, level + 1);
  }
  
  search(root, 0);
  
  return result;
};
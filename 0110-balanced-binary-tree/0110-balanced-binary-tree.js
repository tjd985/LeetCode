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
 * @return {boolean}
 */

const isBalanced = function(root) {
  const DFS = function(currentNode) {
    if (!currentNode) {
      return 0;
    }
    
    const left = 1 + DFS(currentNode.left);
    const right = 1 + DFS(currentNode.right);
    
    if (Math.abs(left - right) > 1) {
      return Infinity;
    }
    
    return Math.max(left, right);
  }

  return DFS(root) === Infinity ? false : true;
};
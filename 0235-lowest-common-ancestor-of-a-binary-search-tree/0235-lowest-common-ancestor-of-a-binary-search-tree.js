/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  let pNode = {};
  let qNode = {};
  
  function DFS(currentNode, parent, depth) {
    if (!currentNode) {
      return;
    }
    
    currentNode.parent = parent;
    currentNode.depth = depth;
    
    if (currentNode.val === p.val) {
      pNode = currentNode;
    }
    
    if (currentNode.val === q.val) {
      qNode = currentNode;
    }
    
    DFS(currentNode.left, currentNode, depth + 1);
    DFS(currentNode.right, currentNode, depth + 1);
  }
  
  function findCommonParent(pNode, qNode) {
    while (true) {
      if (!pNode || !qNode) {
        return root;
      }
      
      console.log(pNode.depth, qNode.depth, pNode.val, qNode.val);
      
      if (pNode.val === qNode.val) {
        return pNode;
      }
    
      return pNode.depth <= qNode.depth ?
        findCommonParent(pNode, qNode.parent) :
        findCommonParent(pNode.parent, qNode);
    }
    
    return root;
  }
    
  DFS(root, null, 0);
  
  return findCommonParent(pNode, qNode);
};
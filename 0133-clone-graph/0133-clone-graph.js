/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const isVisit = {};
  
  function search(node) {
    if (Array.isArray(node) || !node) {      
      return node;
    }
    
    if (isVisit[node.val]) {
      return isVisit[node.val];
    }
    
    const newNode = new Node();
    
    isVisit[node.val] = newNode;
    newNode.val = node.val;
    newNode.neighbors = [];
    
    
    for (let i = 0; i < node.neighbors.length; i++) {
      const neighbor = node.neighbors[i];
      
      newNode.neighbors[i] = search(neighbor);
    }
    
    return newNode;
  }
  
  return search(node);
};
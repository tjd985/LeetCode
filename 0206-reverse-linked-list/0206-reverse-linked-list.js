/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function Node(val, next) {
  this.val = val;
  this.next = next;
  
  return this;
}

const reverseList = function(head) {
  if (!head) {
    return head;
  }  
  
  let headNode = {};
  
  function recursion(depth, prevNode, curNode) {
    let currentNode = {};
    
    if (!curNode.next) {
      currentNode = new Node(curNode.val, prevNode);
      
      headNode = currentNode;
      
      return;
    }
    
    currentNode = new Node(curNode.val, prevNode);
    
    if (!depth) {
      currentNode = new Node(curNode.val, null);
    }
    
    recursion(depth + 1, currentNode, curNode.next);
  }
  
  recursion(0, null, head);
  
  return headNode;
};
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
const middleNode = function(head) {
  const nodeList = {};
  let node = head;
  let index = 1;
  
  while (node) {
    nodeList[index] = node;
    node = node.next;
    
    index++;
  }
  
  return nodeList[Math.ceil(index / 2)];
};
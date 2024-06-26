/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let node = head;
  
  while (node) {
    if (node.isVisit) {
      return true;
    }
    
    node.isVisit = true;
    node = node.next;
  }
  
  return false;
};
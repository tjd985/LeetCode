/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
  let currentNode = head;
  let beforeNode = null;
  const numsMap = new Map();
  
  for (const num of nums) {
    numsMap.set(num, true);
  }
  
  while (currentNode) {
    if (numsMap.get(currentNode.val)) {
      if (!beforeNode) {
        head = currentNode.next;
        currentNode = head;
        
        continue;
      }
      
      beforeNode.next = currentNode.next;
      currentNode = currentNode.next
      
      continue;
    }
    
    beforeNode = currentNode;
    currentNode = currentNode.next
  }
  
  return head;
};
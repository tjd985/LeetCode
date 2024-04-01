/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  const result = new ListNode();
  let tail = result;

  let l1 = list1;
  let l2 = list2;
  
  while (l1 && l2) {
    if (l1.val < l2.val) {
      const newNode = new ListNode(l1.val);
      
      tail.next = newNode;
      tail = tail.next;
      
      l1 = l1.next;
    } else {
      const newNode = new ListNode(l2.val);
      
      tail.next = newNode;
      tail = tail.next;
      
      l2 = l2.next;
    }
  }
  
  if (l1) {
    tail.next = l1;
  }
  
  if (l2) {
    tail.next = l2;
  }
  
  return result.next;
}
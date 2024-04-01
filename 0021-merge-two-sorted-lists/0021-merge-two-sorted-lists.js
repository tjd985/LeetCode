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
  const valueList = [];
  
  if (!(list1 || list2)) {
    return list1;
  }
  
  addValue(valueList, list1);
  addValue(valueList, list2);
  
  valueList.sort((a, b) => a - b);
  
  const headNode = new ListNode(valueList[0] ? valueList[0] : null);
  
  for (let i = 1; i < valueList.length; i++) {
    const newNode = new ListNode(valueList[i]);
    let currentNode = headNode;
    
    while (true) {
      if (!currentNode.next) {
        currentNode.next = newNode;
        
        break;
      }
      
      currentNode = currentNode.next;
    }
  }
  
  return headNode;
};

function addValue(valueList, targetList) {
  while (targetList) {
    valueList.push(targetList.val);
    
    targetList = targetList.next;
  }
}
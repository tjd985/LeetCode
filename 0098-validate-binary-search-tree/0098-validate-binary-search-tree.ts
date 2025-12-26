/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  function recursion(currentNode: TreeNode, min: number, max: number) {
    const currentValue = currentNode.val;

    let leftResult = true;
    let rightResult = true;

    // left
    if (currentNode.left !== null) {
      const leftValue = currentNode.left.val;
      const newMax = currentValue;

      if (leftValue > min && leftValue < newMax) {
        leftResult = recursion(currentNode.left, min, newMax);
      } else {
        return false;
      }
    }

    // right
    if (currentNode.right !== null) {
      const rightValue = currentNode.right.val;
      const newMin = currentValue;

      if (rightValue > newMin && rightValue < max) {
        rightResult = recursion(currentNode.right, newMin, max);
      } else {
        return false;
      }
    }

    return leftResult && rightResult;
  }

  return recursion(root, -Infinity, Infinity);
};
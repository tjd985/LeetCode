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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;

  const inorder = (node) => {
    if (node.left) {
      const result = inorder(node.left);

      if (result !== undefined) {
        return result;
      }
    }

    count++;

    if (count === k) {
      return node.val;
    }

    if (node.right) {
      const result = inorder(node.right);

      if (result !== undefined) {
        return result;
      }
    }

    return;
  }

  return inorder(root);
};
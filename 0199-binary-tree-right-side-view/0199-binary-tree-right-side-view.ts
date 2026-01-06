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

function rightSideView(root: TreeNode | null): number[] {
  const answer = [];

  const inner = (node: TreeNode | null, depth: number) => {
    if (node === null) {
      return;
    }

    inner(node.right, depth + 1);
    inner(node.left, depth + 1);

    if (answer[depth] === undefined) {
      answer[depth] = node.val;
    }
  }

  inner(root, 0);

  return answer;
};
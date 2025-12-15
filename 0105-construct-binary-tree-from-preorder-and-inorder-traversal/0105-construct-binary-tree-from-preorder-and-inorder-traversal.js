/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }

var buildTree = function(preorder, inorder) {
  const build = (preorder, inorder) => {
    if (!inorder.length) {
      return null;
    }

    console.log(preorder);
    console.log(inorder);

    const value = preorder.shift();
    const index = inorder.indexOf(value);

    const newNode = new TreeNode(value);

    newNode.left = build(preorder, inorder.slice(0, index));
    newNode.right = build(preorder, inorder.slice(index + 1));

    return newNode;
  }

  return build(preorder, inorder);
};
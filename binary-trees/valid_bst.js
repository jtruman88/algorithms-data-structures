/*
Base Case:
if !root return true
if !root.left or !root.right return false

recurse down left
recurse down right

return node.left.val < node.val && node.right.val > node.val
*/

var isValidBST = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;


  isValidBST(root.left);
  isValidBST(root.right);


  if (root.left && root.left.val < root.val && !root.right) {
    return true;
  } else if (root.right && root.right.val > root.val && !root.left) {
    return true;
  } else if (root.left.val < root.val && root.right.val > root.val) {
    return true;
  } else {
    return false;
  }
};

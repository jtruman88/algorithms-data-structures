/*
set currentNode to root
loop
if val < currentNode.val
  if currentNode.left
    currentNode = currentNode.left
  else
    currentNode.left = new TreeNode(val);
    break
else
  if currentNode.right
    currentNode = currentNode.right
  else
    currentNode.right = new TreeNode(val)
    break

return root
*/

var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  let currentNode = root;
  let insertion = false;

  while (true) {
    if (val < currentNode.val) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        currentNode.left = new TreeNode(val);
        break;
      }
    } else {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = new TreeNode(val);
        break;
      }
    }
  }

  return root;
};

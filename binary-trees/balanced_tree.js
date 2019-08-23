var isBalanced = function(root) {
  if (!root) return true;
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  } else {
    return isBalanced(root.left) && isBalanced(root.right);
  }
};

function getHeight(node) {
  if (!node) return 0;

  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);

  return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}

/*
Base Case:
root is undefined - return 0

return greater height + 1
*/

var maxDepth = function(root) {
  if (!root) return 0;

  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);

  return (leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1);
};

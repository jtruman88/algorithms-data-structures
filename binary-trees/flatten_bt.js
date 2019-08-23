/*
check if root is valid, if not return empty array
set tree as empty array
set stack as empty array
set currentNode to root

loop while true
push currentNode to result
if currentNode.right, push right to stack
if left, currentNode = left
else
if stack is empty, break
set currentNode to stack.pop

loop until i < tree.length - 1
set tree[i].left to null
set tree[i].right to tree[i + 1]

return root
*/

var flatten = function(root) {
  if (!root) return [];
  const tree = [];
  const stack = [];
  let currentNode = root;

  while (true) {
    tree.push(currentNode);
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      if (stack.length === 0) break;
      currentNode = stack.pop();
    }
  }

  for (let i = 0; i < tree.length - 1; i += 1) {
    tree[i].left = null;
    tree[i].right = tree[i + 1];
  }

  return root;
};

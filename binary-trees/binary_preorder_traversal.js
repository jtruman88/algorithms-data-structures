/*
Create stack as empty array
Set result to empty array
set current_node to root
if root has a right, push right to stack

loop while the stack is not empty
push current_node to result
if currentNode.right, push to stack
if currentNode.left, currentNode = left
else, currentNode  stack.pop

return result

*/

var preorderTraversal = function(root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  let currentNode = root;

  while (true) {
    result.push(currentNode.val);
    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      if (stack.length === 0) break;
      currentNode = stack.pop();
    }
  }

  return result;
};

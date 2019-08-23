/*
Every branch will start with root
every left branch will start with root + root.left
every right branch will start with root + root.right

set sum = 0;
set currentNode = root
set branch = '';
loop while true
add current val to branch

if current.right,
  add [current.right, branch] to stack
if left
  set current to left
else
  add branch as number to sum
  if stack.length === 0, break
  set current to stack.pop[0]
  set branch to stack.pop[1]

return sum

sum = 531;
currentNode = 0
stack = []
branch = '40'
*/

// Preorder traversal

var sumNumbers = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return root.val;
  let sum = 0;
  let currentNode = root;
  let branch = '';
  const stack = [];

  while (true) {
    branch += currentNode.val;

    if (currentNode.right) {
      stack.push([currentNode.right, branch]);
    }

    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      if (branch.length > 1 && !currentNode.right) sum += parseInt(branch, 10);
      if (stack.length === 0) break;
      let next = stack.pop();
      currentNode = next[0];
      branch = next[1];
    }
  }

  return sum;
};

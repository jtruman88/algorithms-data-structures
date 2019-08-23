/*
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

*/

function isSameTree(treeOne, treeTwo) {
  const treeOneVals = fetchAll(treeOne);
  const treeTwoVals = fetchAll(treeTwo);

  if (treeOneVals.length !== treeTwoVals.length) return false;

  for (let i = 0; i < treeOneVals.length; i += 1) {
    if (treeOneVals[i] !== treeTwoVals[i]) return false;
  }

  return true;
}

function fetchAll(root) {
  const treeVals = [];

  (function fetchHelper(root) {
    if (root) {
      fetchHelper(root.left);
      treeVals.push(root.val);
      fetchHelper(root.right);
    }
  })(root);

  return treeVals;
}

// Divide and Conquer

/*
Input: two root nodes
Ouput: boolean based off of tree equality

Binary Tree: a root node + left BT + right BT

Same = bt1 root = bt2 root && left BT === right BT
*/

function isSameTree(root1, root2) {
  // Base Case
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  // Divide
  let left1 = root1.left;
  let left2 = root2.left;
  let right1 = root1.right;
  let right2 = root2.right;

  // Conquer
  let left_result = isSameTree(left1, left2);
  let right_result = isSameTree(right1, right2);

  // Combine
  return root1.val === root2.val && left_result && right_result;
}

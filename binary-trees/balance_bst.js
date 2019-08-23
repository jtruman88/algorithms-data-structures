/*
  traverse through tree, storing all values Inorder into array
  create a new tree, using a binary search type pattern
    set middle as root
    divide and conquer

  buildLeft
    get mid point
    if left > right
      return
    if left === right
      node.left = new TreeNode(values[left])
      return
    if left + 1 === right
      node.left = new TreeNode(values[right]);
      node.left.left = new TreeNode(values[left]);
      return;

      node.left = TreeNode(values[mid])
      buildLeft(node.left, values, left, mid - 1);
      buildRight(node, values, mid + 1, right);

    buildRight
      get mid point
      if left > right
        return
      if left === right
        node.right = new TreeNode(values[right])
        return
      if left + 1 === right
        node.right = new TreeNode(values[left]);
        node.right.right = new TreeNode(values[right]);
        return;

        node.right = TreeNode(values[mid])
        buildLeft(node, values, left, mid - 1);
        buildRight(node.right, values, mid + 1, right);



  [1, 2, 3, 4, 5, 6, 7]
  [1, 2, 3, 4, 5, 6]
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function balanceBST(root) {
  if (!root.left && !root.right) return root;
  const values = [];
  getValuesInorder(root, values);
  return createBinaryTree(values);
}

function getValuesInorder(node, values) {
  if (node) {
    getValuesInorder(node.left, values);
    values.push(node.val);
    getValuesInorder(node.right, values);
  }
}

function createBinaryTree(values) {
  console.log(values);
  const left = 0;
  const right = values.length - 1;
  const mid = Math.floor((right + left) / 2);
  const root = new TreeNode(values[mid]);
  buildLeft(root, values, left, mid - 1);
  buildRight(root, values, mid + 1, right);
  return root;
}

// Binary Searchish

function buildLeft(node, values, left, right) {
  const mid = Math.floor((right + left) / 2);
  if (left > right) {
    return;
  } else if (left === right) {
    node.left = new TreeNode(values[left]);
    return;
  } else if (left + 1 === right) {
    node.left = new TreeNode(values[right]);
    node.left.left = new TreeNode(values[left]);
    return;
  }

    node.left = new TreeNode(values[mid]);
    buildLeft(node.left, values, left, mid - 1);
    buildRight(node.left, values, mid + 1, right);
}

function buildRight(node, values, left, right) {
  const mid = Math.floor((right + left) / 2);
  if (left > right) {
    return;
  } else if (left === right) {
    node.right = new TreeNode(values[right]);
    return;
  } else if (left + 1 === right) {
    node.right = new TreeNode(values[left]);
    node.right.right = new TreeNode(values[right]);
    return;
  }

    node.right = new TreeNode(values[mid]);
    buildLeft(node.right, values, left, mid - 1);
    buildRight(node.right, values, mid + 1, right);
}

const normal = new TreeNode(4);
const l1 = new TreeNode(3);
const l2 = new TreeNode(2);
const l3 = new TreeNode(1);
const r1 = new TreeNode(5);
const r2 = new TreeNode(6);
const r3 = new TreeNode(7);
normal.left = l1;
l1.left = l2;
l2.left = l3;
normal.right = r1;
r1.right = r2;
r2.right = r3;
console.log("Normal -----------------");
console.log(normal);
console.log('');
console.log("Balanced -----------------");
const balanced = balanceBST(normal);
console.log(balanced);

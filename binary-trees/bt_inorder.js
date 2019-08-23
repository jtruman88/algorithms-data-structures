function printInOrder(root) {
  if (root) {
    printInOrder(root.left);
    console.log(root.val);
    printInOrder(root.right);
  }
}

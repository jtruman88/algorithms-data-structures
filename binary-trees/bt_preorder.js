function printPreOrder(root) {
  if (root) {
    console.log(root.val);
    printPreOrder(root.left);
    printPreOrder(root.right);
  }
}

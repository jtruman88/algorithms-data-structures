function printPostOrder(root) {
  if (root) {
    printPostOrder(root.left);
    printPostOrder(root.right);
    console.log(root.val);
  }
}

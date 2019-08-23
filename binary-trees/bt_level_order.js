// By level function

function printLevelOrder(root) {
  let height = getHeight(root); // returns number of levels in tree

  for (let i = 1; i < height; i += 1) {
    printGivenLevel(root, i);
  }
}

function printGivenLevel(root, level) {
  if (!root) return;

  if (level === 1) {
    console.log(root.val);
  } else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
}

function getHeight(node) {
  if (!root) return 0;

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  return (leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1);
}

// Using a queue

function printLevelOrder(root) {
  if (!root) return;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    console.log(queue[0].data);
    let node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

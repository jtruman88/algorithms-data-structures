var levelOrderBottom = function(root) {
  if (!root) return [];
  const tree = [[root]];
  let currentLevel = 0;
  while (true) {
    let level = [];
    for (let i = 0; i < tree[currentLevel].length; i += 1) {
      let node = tree[currentLevel][i];
      if (node.left) level.push(node.left);
      if (node.right) level.push(node.right);
    }

    if (level.length === 0) break;
    tree.push(level);
    currentLevel += 1;
  }

  let result = [];
  for (let i = tree.length - 1; i >= 0; i -= 1) {
    let vals = [];
    for (let j = 0; j < tree[i].length; j += 1) {
      vals.push(tree[i][j].val);
    }
    result.push(vals);
  }

  return result;
};

/*
set tree as array with root in subarray
set treeVals as array with root.val in subarray
set currentLevel as 1

inside loop
set level to []
set levelVals = []
loop through tree[currentLevel]
set currentNode to tree[currentLevel][i]
  if left, add left to level, add left.val to levelVals
  if right, add right to level, add right.val to levelVals

if level.length == 0, break
pus levels to tree
push levelVals to treeVals
increment currentLevel

return treeVals

*/

var levelOrder = function(root) {
  if (!root) return [];
  const tree = [[root]];
  const treeVals = [[root.val]];
  let currentLevel = 0;

  while (true) {
    let level = [];
    let levelVals = [];
    for (let i = 0; i < tree[currentLevel].length; i += 1) {
      let currentNode = tree[currentLevel][i];

      if (currentNode.left) {
        level.push(currentNode.left);
        levelVals.push(currentNode.left.val);
      }

      if (currentNode.right) {
        level.push(currentNode.right);
        levelVals.push(currentNode.right.val);
      }
    }

    if (level.length === 0) break;
    tree.push(level);
    treeVals.push(levelVals);
    currentLevel += 1;
  }

  return treeVals;
};

// Mapping after loop - Better on Space

var levelOrder = function(root) {
  if (!root) return [];
  const tree = [[root]];
  let currentLevel = 0;

  while (true) {
    let level = [];
    let levelVals = [];
    for (let i = 0; i < tree[currentLevel].length; i += 1) {
      let currentNode = tree[currentLevel][i];
      if (currentNode.left) level.push(currentNode.left);
      if (currentNode.right) level.push(currentNode.right);
    }

    if (level.length === 0) break;
    tree.push(level);
    currentLevel += 1;
  }

  for (let i = 0; i < tree.length; i += 1) {
    let vals = [];
    for (let ind = 0; ind < tree[i].length; ind += 1) {
      vals.push(tree[i][ind].val);
    }

    tree[i] = vals;
  }

  return tree;
};

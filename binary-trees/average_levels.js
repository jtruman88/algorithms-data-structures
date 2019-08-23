/*
want to get each level as a nested array, then map over array
converting to averages

set tree as array with root in subarray
currentLevel to 0

loop
set level to empty array
loop through tree[currentLevel]
for each value, if left, add to level, if right, add to level

add level to tree, increase currentLevel by 1
if level is empty break

map through tree and change averages

*/

var averageOfLevels = function(root) {
  const tree = [[root]];
  let currentLevel = 0;

  while (true) {
    let level = [];
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
    let sum = 0;
    for (let ind = 0; ind < tree[i].length; ind += 1) {
      sum += tree[i][ind].val;
    }
    tree[i] = sum / tree[i].length;
  }

  return tree;
};

// Optimized

var averageOfLevels = function(root) {
  const tree = [[root]];
  const result = [root.val];
  let currentLevel = 0;

  while (true) {
    let level = [];
    let sum = 0;
    let length = 0;

    for (let i = 0; i < tree[currentLevel].length; i += 1) {
      let currentNode = tree[currentLevel][i];
      if (currentNode.left) {
        level.push(currentNode.left);
        sum += currentNode.left.val;
        length += 1;
      }

      if (currentNode.right) {
        level.push(currentNode.right);
        sum += currentNode.right.val;
        length += 1;
      }
    }

    if (level.length === 0) break;
    tree.push(level);
    result.push(sum / length);
    currentLevel += 1;
  }

  return result;
};

/*
Input:
m x n nested array of positive integers.

Output:
The minimum sum of numbers from top-left to bottom-right

Can only move down or right

Use helper function to keep track of m and n
m starts at 0
n starts at 0

Base Case:
Reach the bottom-right --- m === grid.length - 1 && n === grid[0].length - 1
return grid[m][n]

pathOne = grid[m][n] + recurse(m, n - 1)
pathTwo = grid[m][n] + recurse(m - 1, n)

pathOne < pathTwo ? pathOne : pathTwo

[1,3,1]
[1,5,1]
[4,2,1]

*/

// Recursive

var minPathSum = function(grid) {
  return minPathHelper(grid, 0, 0);
};

function minPathHelper(grid, m, n) {
  if (m === grid.length - 1 && n === grid[0].length - 1) {
    return grid[m][n];
  }

  if (n === grid[0].length || m === grid.length) {
    return Infinity;
  }

  let pathOne = minPathHelper(grid, m + 1, n);
  let pathTwo = minPathHelper(grid, m, n + 1);

  return (pathOne < pathTwo ? pathOne : pathTwo) + grid[m][n];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log(minPathSum([[1,2],[1,1]]));

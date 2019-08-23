/*
Input:
Two integers representing the columns and rows
m = columns
n = rows

Ouput:
Integer representing the number of possible paths we can take
to get to the opposite corner.

We can only move one step right or
one step down at a time.

Since we are working top-down,
We start at [m, n] and
Finish is at [1, 1]

Base Case:

If we are one above the finish - [m, n-1] OR
if we are one to the left of the finish - [m-1, n] THEN
return 1.

*/

// Recursive

var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1;

  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

// Dynamic Programming

var uniquePaths = function(m, n) {
  return pathsHelper(m, n, {});
};

function pathsHelper(m, n, cache) {
  console.log(cache);
  if (m === 1 || n === 1) return 1;

  let pathOne = cache[`${m-1}-${n}`] || pathsHelper(m - 1, n, cache);
  let pathTwo = cache[`${m}-${n-1}`] || pathsHelper(m, n - 1, cache);

  cache[`${m}-${n}`] = pathOne + pathTwo;

  return cache[`${m}-${n}`];
}

console.log(uniquePaths(3, 3));

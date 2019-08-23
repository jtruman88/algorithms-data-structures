/*
Input:
Integer representing the number of stairs

Output:
An integer representing the number of possible ways to get to the top
given that at any point you can go 1 or 2 steps at a time.

Start with figuring out the base case -

If you are one step away, there is only 1 possible way.
If you are two steps away, there are two possible ways.


*/

// Recursive

var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// Memoization

var climbStairs = function(n) {
  return stairsHelper(n, {});
};

function stairsHelper(n, cache) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let minusOne = cache[n-1] || stairsHelper(n - 1, cache);
  let minusTwo = cache[n-2] || stairsHelper(n - 2, cache);

  cache[n] = minusOne + minusTwo;

  return cache[n];
}

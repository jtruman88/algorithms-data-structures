/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

[1, 1, 2, 5, 6, 7, 10]
*/

var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort();
  helper(candidates, target, result, [], 0, 0, null);
  return result;
};

function helper(candidates, target, result, candidate, ind, sum, last) {
  if (sum === target) {
    result.push([...candidate]);
  } else {
    for (let i = ind; i < candidates.length; i += 1) {
      if (candidates[i] === candidates[i-1] && candidates[i] === last) continue;
      if (sum + candidates[i] > target) continue;

      candidate.push(candidates[i]);
      helper(candidates, target, result, candidate, i + 1, sum + candidates[i], last);
      last = candidate.pop();
    }
  }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));

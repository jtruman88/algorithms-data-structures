/*

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/

var permuteUnique = function(nums) {
  const result = [];
  helper(nums, result, [], {}, {});
  return result;
};

function helper(nums, result, candidate, cache, visited) {
  if (candidate.length === nums.length && !cache[candidate]) {
    result.push([...candidate]);
    cache[candidate] = true;
  } else {
    for (let i = 0; i < nums.length; i += 1) {
      if (visited[i]) continue;

      candidate.push(nums[i]);
      visited[i] = true;
      helper(nums, result, candidate, cache, visited);
      candidate.pop();
      visited[i] = false;
    }
  }
}

// Pre-sorting

var permuteUnique = function(nums) {
  const result = [];
  nums.sort();
  helper(nums, result, [], {});
  return result;
};

function helper(nums, result, candidate, visited) {
  if (candidate.length === nums.length) {
    result.push([...candidate]);
  } else {
    for (let i = 0; i < nums.length; i += 1) {
      if (i > 0 && nums[i] === nums[i-1] && !visited[i-1]) continue;
      if (visited[i]) continue;

      candidate.push(nums[i]);
      visited[i] = true;
      helper(nums, result, candidate, visited);
      candidate.pop();
      visited[i] = false;
    }
  }
}

console.log(permuteUnique([1, 1, 2]));

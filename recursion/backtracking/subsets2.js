var subsetsWithDup = function(nums) {
  const result = [];
  helper(nums, result, [], {}, 0);
  return result;
};

function helper(nums, result, candidate, cache, ind) {
  let sortedCan = [...candidate].sort();
  if (!cache[sortedCan]) {
    result.push([...candidate]);
    cache[sortedCan] = true;
  }

  for (let i = ind; i < nums.length; i += 1) {
    candidate.push(nums[i]);
    helper(nums, result, candidate, cache, i + 1);
    candidate.pop();
  }
}

// Pre-sorting


var subsetsWithDup = function(nums) {
  const result = [];
  nums.sort();
  helper(nums, result, [], 0);
  return result;
};

function helper(nums, result, candidate, ind) {
  result.push([...candidate]);

  for (let i = ind; i < nums.length; i += 1) {
    if (i > idx && nums[i] === nums[i-1]) continue;
    candidate.push(nums[i]);
    helper(nums, result, candidate, i + 1);
    candidate.pop();
  }
}

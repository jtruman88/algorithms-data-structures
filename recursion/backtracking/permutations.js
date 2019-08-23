function permute(nums) {
  const result = [];
  helper(nums, result, []);
  return result;
}

function helper(nums, result, candidate) {
  // Constraint checking
  if (candidate.length === nums.length && !result.includes(candidate) && isUnique(candididate)) {
    result.push(candidate.slice(0));
  } else {
  // Branching Logic
    nums.forEach(num => {
      candidate.push(num);
      helper(nums, result, candidate);
      candidate.pop();
    });
  }
}

function isUnique(arr) {
  // checks is all values are unique
}

// Optimized

function helper(nums, result, candidate) {
  // Constraint checking
  if (candidate.length === nums.length && !result.includes(candidate)) {
    result.push(candidate.slice(0));
  } else {
  // Branching Logic
    for (let i = 0; i < nums.length; i += 1) {
      if (candidate.includes(nums[i])) {
        continue;
      }

      candidate.push(nums[i]);
      helper(nums, result, candidate);
      candidate.pop();
    }
  }
}

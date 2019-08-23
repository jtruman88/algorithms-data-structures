/*
if sum(candidate) === target
  result.push candidiate
else
  while ind < candididates.length
  if sum(candidate > target)
    ind += 1
  candidate.push(candidiates[ind])
  helper()
  candidiate.pop
*/

var combinationSum = function(candidates, target) {
  let result = [];
  helper(candidates, target, [], result, 0);
  return result;
};

function helper(candidates, target, candidate, result, ind) {
  let canSum = sum(candidate);
  if (canSum === target) {
    result.push([...candidate]);
  } else if (canSum < target) {
    for (let i = ind; i < candidates.length; i += 1) {
      candidate.push(candidates[i]);
      helper(candidates, target, candidate, result, i);
      candidate.pop();
    }
  }
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

// Rather than summing at the beginning of each iteration, just pass the sum along
// in the method call. (sum + candidates[i]). This way the sum is not actually changing
// but being updated on the fly with the recursive calls.

var combinationSum = function(candidates, target) {
  let result = [];
  helper(candidates, target, [], result, 0, 0);
  return result;
};

function helper(candidates, target, candidate, result, ind, sum) {
  if (sum === target) {
    result.push([...candidate]);
  } else if (sum < target) {
    for (let i = ind; i < candidates.length; i += 1) {
      candidate.push(candidates[i]);
      helper(candidates, target, candidate, result, i, sum + candidates[i]);
      candidate.pop();
    }
  }
}

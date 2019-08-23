/*
Constraints:
Each candidate must be unique
each candidate must have k values
no duplicate values in candidate


*/

var combine = function(n, k) {
  const result = [];
  helper(n, k, [], result, 1);
  return result;
};

function helper(n, k, candidate, result, start) {
  if (candidate.length === k) {
    result.push([...candidate]);
  } else {
    for (let i = start; i <= n; i += 1) {
      candidate.push(i);
      helper(n, k, candidate, result, i + 1);
      candidate.pop();
    }
  }
}

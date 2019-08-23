/*
Constraints:
Candidate.join.length === s.length

Hold a current string variable.
if current is a palindrome, put current into candidiate
recurse adding next letter to current


'aabbcc'
*/

var partition = function(s) {
  const result = [];
  helper(s, result, [], 0, '');
  return result;
};

function helper(s, result, candidate, ind, current) {
  console.log(candidate);
  if (candidate.join('').length === s.length && allArePalindromes(candidate)) {
    result.push(candidate);
  } else {
    for (let i = ind; i < s.length; i += 1) {
      candidate.push(current + s[i]);
      helper(s, result, candidate, i+1, current + s[i]);
      candidate.pop();
    }
  }
}

function allArePalindromes(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!isPalindrome(arr[i])) return false;
  }

  return true;
}

function isPalindrome(s) {
  let start = 0;
  let end = s.length -1;

  while (start <= end) {
    if (s[start] !== s[end]) return false;
    start += 1;
    end -= 1;
  }

  return true;
}

console.log(partition('aab'));

// working solution

function partition(s) {
  const result = [];
  helper(s, result, [], 0);
  return result;
}

function helper(string, result, solution, position) {
  if (position === string.length) {
    if (solution.length > 0) {
      result.push([...solution]);
    }
  } else {
    for (let i = position; i < string.length; i += 1) {
      let subStr = string.substring(position, i+1);
      if (isPalindrome(subStr)) {
        solution.push(subStr);
        helper(string, result, solution, i + 1);
        solution.pop();
      }
    }
  }
}

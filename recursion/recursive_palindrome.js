/*
Read the same backwards and forwards.
Each iteration, the first letter needs to match the last letter.
If there is only 1 or 0 letters left, that is base case.


1. if str.length <= 1
  return true
2. else if str[0] !== str[str.length - 1]
  return false
3. else
  return isPalindrome(str.slice(1, -1));
*/

// Recursive

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, -1));
  }
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('abccba'));
console.log(isPalindrome('racecare'));

// Recursive Helper

function isPalindromeWithHelp(str) {
  return isPalindromeHelper(str, 0, str.length - 1);
}

function isPalindromeHelper(str, first, last) {
  if (last <= first) {
    return true;
  } else if (str[first] !== str[last]) {
    return false;
  } else {
    return isPalindromeHelper(str, first + 1, last - 1);
  }
}

console.log(isPalindromeWithHelp('racecar'));
console.log(isPalindromeWithHelp('abccba'));
console.log(isPalindromeWithHelp('racecare'));

// Iterative

function isPalindromeIterative(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

console.log(isPalindromeIterative('racecar'));
console.log(isPalindromeIterative('abccba'));
console.log(isPalindromeIterative('racecare'));

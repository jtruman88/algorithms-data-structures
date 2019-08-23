/*
Input:
integer

Output:
Boolean based on integer beaing a perfect square

Mental Model - Binary Search

Check if 0 or 1 and return true?

1. set left to 0
2. set right to Math.ceil(num / 2)
3. loop while left + 1 < right
4. set mid
5. if mid * mid === num
  return true
6. else if (mid * mid < num)
  left = mid
7. else
  right = mid
---after loop
8. if left * left === num return true;
9. if right * right === num return true;
return false
*/

var isPerfectSquare = function(num) {
  let left = 0;
  let right = Math.ceil(num / 2);

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (left * left === num) return true;
  if (right * right === num) return true;
  return false;
};

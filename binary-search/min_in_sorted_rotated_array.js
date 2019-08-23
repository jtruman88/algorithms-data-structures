/*
Input:
A sorted array of unique values that has
been rotated at a random point.

Output:
Lowest value in array

Mental Model  - Binary Search

- Whenever mid is greater than right, its also
  great than left.
- If its greater than left, the rotation happened
  on the right, which is where min will be.

              r
 [1, 2, 3, 4, 0]
  l
 [0, 1, 2, 3, 4]

[4, 0, 1, 2, 3]

[0, 1, 2, 3, 4]

1. set left to 0
2. set right to nums.length - 1
3. loop while left + 1 < right
4. set mid
5. if nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1] - If middle is less than both
  return nums[mid]                                             sides, it must be lowest
6. else if nums[mid] > nums[right]    - if the middle value is greater than the
  left = mid                            right end value, lowest should be right
7. else                               - otherwise it should be left
  right = mid
// after loop

return value at left or right, whichever is smaller - check which is smaller, return value
*/

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
      return nums[mid];
    } else if (nums[mid] > nums[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return (nums[left] < nums[right] ? nums[left] : nums[right]);
};

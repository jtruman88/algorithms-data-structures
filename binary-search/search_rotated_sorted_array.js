/*
Input:
- A sorted array of unique values that has
  been rotated at a random point.
- Target value

Ouput:
Return index of target, if not found return -1

Mental Model  - Binary Search
  One side will have the inflection point, the other will be normally ordered
    find which side does not have the inflection point
    this side will be regularly ordered
    check if target is within normal side
    if not shift that side's pointer to mid


1. set left
2. set right
3. loop while left + 1 < right
4. set mid
5. if mid value === target
  return mid
6. else if nums[left] < nums[mid]                 - check if normally ordered
   if target >= nums[left] and target < nums[mid] - check if target is within range
    right = mid
    else
    left = mid
7. else
   if target > nums[mid] and target <= nums[right] - check if target is within range
   left = mid;
   else
  right = mid
// after loop
8. if (nums[left] === target) return left
9. if nums[right] === target return right
10. return -1
*/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[left] < nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }

  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
};

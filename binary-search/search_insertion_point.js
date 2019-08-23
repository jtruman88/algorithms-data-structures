/*
Input:
Array of sorted values
Target Value

Ouput:
index at which the target exists OR
Where the target would exist it it is not present

Mental Model - Binary Search
      - Break potential options in half by checking midpoint
        until position or value is found

1. set left at 0
2. set right at nums.length - 1
3. declare mid;
3. begin looping until left + 1 < right
4. set mid at ceil of left + (right - left) / 2
5. if nums[mid] === target
  return mid
6. else if nums[mid] < target
  set left to mid
7. else
  set right to mid
*/

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.ceil(left + (right - left) / 2);

  while (left + 1 < right) {
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }

    mid = Math.ceil(left + (right - left) / 2);
  }

  if (nums[left] == target) return left;
  if (nums[right] == target) return right;

  if (nums[right] < target) {
    return right + 1;
  } else if (nums[left] > target) {
    return 0;
  } else {
    return (nums[mid] < target ? mid + 1 : mid);
  }
};

// collision condition

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.ceil((right + left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return (nums[mid] < target ? mid + 1 : mid);
};

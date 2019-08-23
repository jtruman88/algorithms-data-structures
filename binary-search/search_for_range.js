/*
Input:
Sorted array of integers
Target Value

Output:
Array of two values, start position, end position

Mental Model - Binary Search
  - Break potential options in half until value is found
  - Find where value starts and ends


[5, 7, 8, 8, 8, 8, 8, 8, 10], 8 => [2, 7]


[8, 8, 8, 8, 8, 8, 8], 8 => [0, 6]

          m     r
[1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6], 2
 l
                               r
                            m
[1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6], 5
                         l

((log n) + log n + log n)

findRange(arr, target)
1. return [binarySearchStart(arr), binarySearchEnd(arr)]

binarySearchEnd(arr, target)
1. set left = 0
2. set right = 0
3. loop while left + 1 < right
4. set mid
5. if arr[mid] < Target
  left = mid
6. else if arr[mid] > target
  right = mid
7. else
  if arr[mid + 1] > target
    return mid
  else
    left = mid

if (arr[left] === target) return left
if arr[right] === target return right
return -1

binarySearchStart(arr, target)
1. set left = 0
2. set right = 0
3. loop while left + 1 < right
4. set mid
5. if arr[mid] < Target
  left = mid
6. else if arr[mid] > target
  right = mid
7. else
  if arr[mid - 1] < target
    return mid
  else
    right = mid

if (arr[left] === target) return left
if arr[right] === target return right
return -1


*/

function findRange(nums, target) {
  return [binarySearchStart(nums, target), binarySearchEnd(nums, target)];
}

function binarySearchStart(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      if (nums[mid - 1] < target) {
        return mid;
      } else {
        right = mid;
      }
    }
  }

  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1;
}

function binarySearchEnd(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      if (nums[mid + 1] > target) {
        return mid;
      } else {
        left = mid;
      }
    }
  }
  
  if (nums[right] === target) return right;
  if (nums[left] === target) return left;
  return -1;
}

console.log(findRange([5, 7, 8, 8, 8, 8, 8, 8, 10], 8));
console.log(findRange([8, 8, 8, 8, 8, 8, 8], 8));
console.log(findRange([8, 8, 8, 8, 8, 8, 8], 7));
console.log(findRange([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6], 2));
console.log(findRange([1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6], 5));
console.log(findRange([1, 1, 2, 2, 3, 3, 3, 4, 4, 4], 6));
console.log(findRange([1, 1, 2, 2, 3, 3, 3, 4, 4, 4], 0));

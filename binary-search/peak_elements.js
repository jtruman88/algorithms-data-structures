/*
Input:
An array of integers where there are no two consecutive integers

Output:
Index where element is great than both neightbors

Outside of the boundaries of the array are always lower than neightbors

Mental Model - Binary Search

1. set left = 0
2. set right = nums.length - 1
3. loop while left + 1 < right
4. set mid
5. if nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1] - if mid is peak
  return mid
6. else if nums[mid - 1] > nums[mid + 1] - shift towards the greater number
  right = mid
7. else
 left = mid

8. if nums[left] > nums[right] return left, else return right - At egde, return greater
*/

var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.ceil(left + (right - left) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid - 1] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return (nums[left] > nums[right] ? left : right);
};

console.log(findPeakElement([1,2,3,1]) === 2);
console.log(findPeakElement([1,6,5,3,2,6,4]) === 1 || 6);
console.log(findPeakElement([1, 2, 3, 4, 5]) === 4);
console.log(findPeakElement([5, 4, 3, 2, 1]) === 0);
console.log(findPeakElement([1, 9, 2, 1, 3, 4, 6, 7, 8]) === 8);

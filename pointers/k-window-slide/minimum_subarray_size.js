/*
Input:
target value
Array of positive integers

Output:
length of smallest subarray of consecutive integers that add to target

Mental Model - K Window Slide

1. set left to 0
2. set right to 1
3. set length to 0 - hold the length of current smallest subarray
4. set tempSum = 0 - Hold values between left and right values
5. begin looping while right < nums.length
6. if nums[left] equals s, return 1
7. else if nums[left] + nums[right] + tempSum < s, set tempSum += nums[right], increment right
8. else -
  set currentLength to current length of subarray
  if length === 0 or currentLength < length),
    length = currentLength.
  increment left, set right to left + 1, tempSum = 0
*/


// O(N^2) - Worst case scenario, right has to touch a sub array of elements
         // for each element in the array

 var minSubArrayLen = function(s, nums) {
  let left = 0;
  let right = 1;
  let length = 0;
  let tempSum = 0;

  while (right < nums.length) {
    if (nums[left] >= s) {
      return 1;
    } else if (nums[left] + nums[right] + tempSum < s) {
      tempSum += nums[right];
      right += 1;
    } else {
      let currentLength = right - left + 1;
      if (length === 0 || currentLength < length) {
        length = currentLength;
      }
      left += 1;
      right = left + 1;
      tempSum = 0;
    }
  }

  return length;
};

 r
[2,3,1,2,4,3]
 l

 /*

 Rather than only moving left up once and moving right back to left + 1
 Keep both left and right values, plus values in between, in tempsum
 when tempSum >= s, loop while tempSum >= s
 remove left from tempSum, move left up, remove 1 from currentLength

Left can go up multiple steps per iteration and right doesn't move backwards

set tempSum to nums[left] + nums[right] - Set as running subarray total
set length = 0

start loop while right < nums.length
if nums[left] >= s
  return 1
else if tempSum < s,
  increment right
  add nums[right] to tempSum - increasing size of subarray
else
  set currentLength = right - left + 1 - current subarray
  if length === 0 or currentLength < length
    while tempSum >= s      - all of the values in the subarray may not be
      tempSum -= nums[left]   necessary to be >= s. remove one value at a time
      left += 1               until it is not.
      length = currentLength
      currentLength -= 1
  else                      - if the currentLength is not less, move left up
    tempSum -= nums[left]     and remove left from tempSum
    left += 1

 */

 // Elastic Window

 // O(N) - It only touches on each element once.

 var minSubArrayLen = function(s, nums) {
  let left = 0;
  let right = 1;
  let length = 0;
  let tempSum = nums[left] + nums[right];

  while (right < nums.length) {
    if (nums[left] >= s) {
      return 1;
    } else if (tempSum < s) {
      right += 1;
      tempSum += nums[right];
    } else {
      let currentLength = right - left + 1;
      if (length === 0 || currentLength < length) {
        while (tempSum >= s) {
          tempSum -= nums[left];
          left += 1;
          length = currentLength;
          currentLength -= 1;
        }
      } else {
        tempSum -= nums[left];
        left += 1;
      }
    }
  }

  return length;
};

/*
Input:
Array of positive integers representing maximum jump size

Output:
Boolean - based off of whether or not it is possible
to reach the final index

Starting with val at ind 0, jumping ahead that value, then using the value we land on
jump ahead, etc. Until we can either land on the final index, or not.

Loop
Jump ahead our first value.

use helper function with array and current index

Base Case:
If we're at a value of 0 and it is not the final value in array, false
If we are past the end of the array, false
if we are at the final index, true



return recurse(nums, index + nums[index]) || recurse(nums, index + nums[index] - 1)

Cache will be index plus jump value

[3,2,1,0,4]
*/

// Iterative / Recursive

function canJump(nums) {
  return jumpHelper(nums, 0);
}

function jumpHelper(nums, ind) {
  if (ind === nums.length - 1) return true;

}

// Recursive

var canJump = function(nums) {
  return jumpHelper(nums, 0, nums[0], nums[0]);
};

function jumpHelper(nums, currentInd, currentVal, originVal) {
  if (currentInd === nums.length - 1) {
    return true;
  } else if (currentInd >= nums.length) {
    if (originVal > 1) {
      return jumpHelper(nums, 0, originVal - 1, originVal - 1);
    } else {
      return false;
    }
  } else if (currentVal === 0) {
    if (currentInd === 0) {
      return false;
    } else {
      return jumpHelper(nums, 0, originVal - 1, originVal - 1);
    }
  }

  return jumpHelper(nums, currentInd + currentVal, nums[currentInd + currentVal], originVal);
}


console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,3,1,1,4]));
console.log(canJump([2,0,0]));
console.log(canJump([2,0]));

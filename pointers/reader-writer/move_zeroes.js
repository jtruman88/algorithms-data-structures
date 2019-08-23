/*
Input:
array of numbers

Output:
array with zeroes moved to the end in-place

Mental Model - Reader/writer

1. set writer to 0
2. set reader to 0
3. loop while reader < nums.length
3. if nums[reader] !== 0, swap nums[writer] and nums[reader], increment writer by 1. always increment reader by 1
4. return nums
*/

var moveZeroes = function(nums) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      let temp = nums[writer];
      nums[writer] = nums[reader];
      nums[reader] = temp;
      writer += 1;
    }
    reader += 1;
  }

  return nums;
};


// Alternate Solution

var moveZeroes = function(nums) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] === 0) {
      reader += 1;
      continue;
    } else {
      nums[writer] = nums[r];
      writer += 1;
    }
    reader += 1;
  }

  while (writer < nums.length) {
    nums[writer] = 0;
    writer += 1;
  }
};

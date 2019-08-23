/*
Input:
Array of values
And a target value

Output:
Length of the array with all instances of target value removed
Modify array in-place

Mental Model - Reader/Writer

1. declare writer pointer at beginning of Array
2. declare reader pointer at beginning of Array
3. Loop until reader reaches end of array
4. If array[reader] !== value, swap reader and writer position, increment writer by 1. always increment reader by 1
5. After reader loop, begin writer loop from end of Array
6. pop values from array while index is > Writer
7. return array.length
*/

var removeElement = function(nums, val) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] !== val) {
      let temp = nums[writer];
      nums[writer] = nums[reader];
      nums[reader] = temp;
      writer += 1;
    }
    reader += 1;
  }

  for (let i = nums.length; i > writer; i -= 1) {
    nums.pop();
  }

  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));


// Optimized

var removeElement = function(nums, val) {
  let writer = 0;
  let reader = 0;

  while (reader < nums.length) {
    if (nums[reader] !== val) {
      nums[writer] = nums[reader];
      writer += 1;
    }
    reader += 1;
  }

  return writer;
};

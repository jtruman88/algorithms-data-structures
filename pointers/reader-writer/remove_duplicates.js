/*
Input:
Array of values

Output:
Length of array with duplicates removed in-place

Mental Model - Reader/Writer

1. set reader to 0.
2. set writer to 0.
3. loop while reader < nums.Length
4. if nums[reader] !== nums[writer], increment writer, set nums[writer] to nums[reader], increment reader always
5. begin looping through nums backwards while i < writer
6. nums.pop
7. return nums.length
*/


var removeDuplicates = function(nums) {
  let reader = 1;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] !== nums[writer]) {
      writer += 1;
      nums[writer] = nums[reader];
    }
    reader += 1;
  }

  for (let i = nums.length - 1; i > writer; i -= 1) {
    nums.pop();
  }

  return nums.length;
};


console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// Optimized

var removeDuplicates = function(nums) {
  let reader = 1;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] !== nums[writer]) {
      writer += 1;
      nums[writer] = nums[reader];
    }
    reader += 1;
  }

  return writer + 1;
};

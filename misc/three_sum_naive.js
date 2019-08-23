/*

Input:
Array of numbers - [1, -1, 2, -4, 6, 0, 2, -2]

Ouput:
Nested array of all combinations of three numbers that equal 0

1. set result as empty Array
2. begin Loop through numbers with i
3. begin loop through numbers at i + 1 with j
4. begin loop through numbners at j + 1 with k
5. If numbers[i] + numbers[j] + numbers[k] === 0, add array to result
6. return result
*/

var threeSum = function(nums) {
  const result = [];

    for (let i = 0; i < nums.length; i += 1) {
      for (let j = i + 1; j < nums.length; j += 1) {
        for (let k = j + 1; k < nums.length; k += 1) {
          if (nums[i] + nums[j] + nums[k] === 0) {
            result.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }

    return result;
};

let numbers = [1, -1, 2, -4, 6, 0, 2, -2];

console.log(threeSum(numbers));

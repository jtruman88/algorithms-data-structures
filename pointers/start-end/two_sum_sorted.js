/*
Input:
sorted array of integers
target integer

Ouput:
array of indices where numberd at indices add up to target

Mental Model - Start/End

1. set left at 0
2. set right at numbers.length - 1
3. loop while left < right
4. if numbers[left] + numbers[right] > target, decrement right
5. else if numbers[left] + numbers[right] < target, decrement left
6. else return [left + 1, right + 1]
*/

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right -= 1;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};

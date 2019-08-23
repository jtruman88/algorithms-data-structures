/*
[1, 2, 3, 4, 5, 6, 7, 8]
[1, 2, 3, 4] [5, 6, 7, 8]
[1, 2] [3, 4] [5, 6] [7, 8]

[1, 2, 3, 4]
[1, 2] [3, 4]
*/

function maxCrossingSum(arr, left, mid, right) {
  let sum = 0;
  let left_sum = -Infinity;
  let right_sum = -Infinity;

  for (let i = mid; i >= left; i -= 1) {
    sum += arr[i];

     if (sum > left_sum) {
       left_sum = sum;
     }
  }

  sum = 0;

  for (let i = mid + 1; i <= right; i += 1) {
    sum += arr[i];

    if (sum > right_sum) {
      right_sum = sum;
    }
  }

  return left_sum + right_sum;
}

function maxSubArraySum(arr, left, right) {
  if (left === right) return arr[left];

  let mid = Math.floor((left + right) / 2);

  return max(maxSubArraySum(arr, left, mid),
             maxSubArraySum(arr, mid + 1, right),
             maxCrossingSum(arr, left, mid, right));
}

function max(val1, val2, val3) {
  if (val1 >= val2 && val1 >= val3) {
    return val1;
  } else if (val2 >= val1 && val2 >= val3) {
    return val2;
  } else {
    return val3;
  }
}

let arr = [2, 3, 4, 5, 7];
let length = arr.length - 1;

console.log(maxSubArraySum(arr, 0, length));

arr = [2, -6, 9, -3, 6, 8];
length = arr.length - 1;

console.log(maxSubArraySum(arr, 0, length));

arr = [-2, -5, 6, -2, -3, 1, 5, -6];
length = arr.length - 1;

console.log(maxSubArraySum(arr, 0, length));

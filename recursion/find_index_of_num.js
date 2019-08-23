/*
[1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6]
Base Case:
if arr[mid] === target
  return arr[mid]
else if arr[mid] >= target
  return binarySearchForIndex(arr, target, 0, Math.floor(mid / 2), mid - 1);
else if arr[mid] > target
  return binarySearchForIndex(arr, target, mid, Math.floor((high - low) / 2), high)
else
  return -1
*/

function findIndexOfNum(arr, target) {
  return binarySearchForIndex(arr, target, 0, Math.floor(arr.length / 2), arr.length - 1);
}

function binarySearchForIndex(arr, target, low, mid, high) {
  if (arr[mid] === target) {
    return mid;
  } else if (low >= high) {
    return -1;
  } else if (arr[mid] > target) {
    return binarySearchForIndex(arr, target, 0, Math.floor(mid / 2), mid - 1);
  } else if (arr[mid] < target) {
    return binarySearchForIndex(arr, target, mid, Math.ceil((high + mid) / 2), high);
  }
}

console.log(findIndexOfNum([1, 2, 3, 4, 5], 1));
console.log(findIndexOfNum([1, 2, 3, 4, 5], 2));
console.log(findIndexOfNum([1, 2, 3, 4, 5], 3));
console.log(findIndexOfNum([1, 2, 3, 4, 5], 4));
console.log(findIndexOfNum([1, 2, 3, 4, 5], 5));
console.log(findIndexOfNum([1, 2, 3, 4, 5, 6], 1));
console.log(findIndexOfNum([1, 2, 3, 4, 5, 6], 6));
console.log(findIndexOfNum([1, 2, 3, 4, 5, 6], 7));

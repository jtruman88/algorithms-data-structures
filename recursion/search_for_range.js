/*
[1, 1, 2, 2, 6], 2


*/

function findRangeOfNum(arr, target) {
  return [binarySearchForLow(arr, target, 0, Math.floor(arr.length / 2), arr.length - 1), binarySearchForHigh(arr, target, 0, Math.floor(arr.length / 2), arr.length - 1)];
}

function binarySearchForLow(arr, target, low, mid, high) {
  if (arr[mid] === target && arr[mid - 1] !== target) {
    return mid;
  } else if (low >= high) {
    return -1;
  } else if (arr[mid] >= target) {
    return binarySearchForLow(arr, target, 0, Math.floor(mid / 2), mid - 1);
  } else{
    return binarySearchForLow(arr, target, mid, Math.ceil((high + mid) / 2), high);
  }
}

function binarySearchForHigh(arr, target, low, mid, high) {
  if (arr[mid] === target && arr[mid + 1] !== target) {
    return mid;
  } else if (low >= high) {
    return -1;
  } else if (arr[mid] <= target) {
    return binarySearchForHigh(arr, target, mid, Math.ceil((high + mid) / 2), high);
  } else {
    return binarySearchForHigh(arr, target, 0, Math.floor(mid / 2), mid - 1);
  }
}

console.log(findRangeOfNum([5, 7, 7, 8, 8, 10], 8));
console.log(findRangeOfNum([5, 7, 7, 8, 8, 10], 7));

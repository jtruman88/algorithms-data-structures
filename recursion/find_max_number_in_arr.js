/*
Base Base:

Array length is one, return element from array.
*/

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  const left = findMax(leftHalf);
  const right = findMax(rightHalf);

  return max(left, right);
}

function max(first, second) {
  return (first > second ? first : second);
}

console.log(findMax([1, 4, 3, 7, 8, 9]));

// Pointers

function arrayMax(arr) {
  return arrayMaxHelper(arr, 0, arr.length - 1);
}

function arrayMaxHelper(arr, low, high) {
  if (low === high) {
    return arr[low];
  }

  const mid = Math.floor((high + low) / 2);
  const left = arrayMaxHelper(arr, low, mid);
  const right = arrayMaxHelper(arr, mid + 1, high);

  return (left > right ? left : right);
}

console.log(arrayMax([1, 4, 3, 7, 8, 9]));

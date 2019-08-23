/*
Input:
Ordered Array
Target value

Output:
Index of target value in array

1. set lowerBound = 0
2. set upperBound = array.length - 1
3. loop while lowerBound <= upperBound
4. set midpoint = Math.ceil((upperBound + lowerBound) / 2);
5. If midpoint < target, move lowebound up to midpoint + 1
6. else if midpoint > target, move upperbound down to midpoint - 1
7. else if midpoint === value, return midpoint
8. after loop return null
*/

function binarySearch(array, target) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.ceil((upperBound + lowerBound) / 2);

    if (array[midpoint] < target) {
      lowerBound = midpoint + 1;
    } else if (array[midpoint] > target) {
      upperBound = midpoint - 1;
    } else if (array[midpoint] === target) {
      return midpoint;
    }
  }

  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7) === 6);
console.log(binarySearch([11, 26, 34, 48, 59, 62, 76, 89], 11) === 0);
console.log(binarySearch([11, 26, 34, 48, 59, 62, 76, 89, 98], 59) === 4);
console.log(binarySearch([11, 26, 34, 48, 59, 62, 76, 89], 43) === null);


// Alternate

function binarySearchAlt(array, target) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound + 1 < upperBound) {
    let midpoint = Math.ceil(lowerBound + (upperBound - lowerBound) / 2);

    if (array[midpoint] == target) {
      return midpoint;
    } else if (array[midpoint] < target/* condition for bringing lower up */) {
      lowerBound = midpoint
    } else {
      upperBound = midpoint;
    }
  }

  if (array[lowerBound] == target) return lowerBound;
  if (array[upperBound] == target) return upperBound;
}

console.log(binarySearchAlt([1, 2, 3, 4, 5, 6, 7, 8], 7) === 6);
console.log(binarySearchAlt([11, 26, 34, 48, 59, 62, 76, 89], 11) === 0);
console.log(binarySearchAlt([11, 26, 34, 48, 59, 62, 76, 89, 98], 59) === 4);
console.log(binarySearchAlt([11, 26, 34, 48, 59, 62, 76, 89], 43) === undefined);

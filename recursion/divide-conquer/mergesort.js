function mergeSort(arr) {
  // base case
  if (arr.length === 1) {
    return arr;
  }

  // Divide
  const midpoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midpoint);
  const rightHalf = arr.slice(midpoint);

  // Conquer
  const left = mergeSort(leftHalf);
  const right = mergeSort(rightHalf);

  // Combine
  return merge(left, right);
}

function merge(arr1, arr2) {
  const result = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1 += 1;
    } else {
      result.push(arr2[p2]);
      p2 += 1;
    }
  }

  if (p1 < arr1.length) {
    while (p1 < arr1.length) {
      result.push(arr1[p1]);
      p1 += 1;
    }
  } else if (p2 < arr2.length) {
    while (p2 < arr2.length) {
      result.push(arr2[p2]);
      p2 += 1;
    }
  }

  return result
}

console.log(mergeSort([5, 7, 3, 2, 4, 1, 6, 0]));


/*
Each recursive call gets sent to the merge function, except for the base case, which just returns a single element array
The merge function is where the actual sorting happens.
*/

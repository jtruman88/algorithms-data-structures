/*
input

Array of arrays

Output

single array in spiral order


Algorithm

1. set result = matrix.slice(0, 1)[0]
2. set upperBound = 1;
3. setlowerBound = matrix.length - 1
4. set leftBound = 0
5. set rightBound = result.length
6. maxlength = matrix.length * result.length
7. loop while result.length < maxlength
8. loop through each list in matrix from upperBound until lowerBound, add list[rightBound] to result
9. after loop, concat matrix[lowerBound].slice(leftBound, rightBound).reverse() to result, set lowerBound -= 1, set rightBound -= 1
10. loop through each list in matrix from lowerBound until upperBound, add list[leftBound] to result
11. after loop, set concat matrix[upperBound].slice(leftBound, rightBound) to result, set leftBound += 1, set upperBound += 1
12. return result


Test Cases:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:
[1,2,3,6,9,8,7,4,5]

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output:
[1,2,3,4,8,12,11,10,9,5,6,7]

Inupt:
[
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 2, 3, 4, 5, 6, 7, 8],
  [8, 7, 6, 5, 4, 3, 3, 2],
  [7, 6, 5, 4, 3, 2, 2, 1],
  [5, 4, 3, 6, 7, 8, 4, 3]
]
Ouput:
[1, 2, 3, 4, 5, 6, 7, 8, 8, 2, 1, 3, 4, 8, 7, 6, 3, 4, 5, 7, 8, 9, 2, 3, 4, 5, 6, 7, 3, 2, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3]
*/


var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return matrix;
  } else if (matrix.length === 2) {
    return matrix[0].concat(matrix[1].reverse());
  } else if (matrix[0].length === 1) {
    return flatten(matrix);
  }

  let result = matrix.slice(0, 1)[0];
  let upperBound = 1;
  let rightBound = result.length;
  let lowerBound = matrix.length - 1;
  let leftBound = 0;
  const maxLength = matrix.length * result.length;

  while (result.length < maxLength) {
    for (let i = upperBound; i < lowerBound; i += 1) {
      result.push(matrix[i][rightBound - 1]);
    }

    result = result.concat(matrix[lowerBound].slice(leftBound, rightBound).reverse());
    lowerBound -= 1;
    rightBound -= 1;

    for (let i = lowerBound; i > upperBound; i -= 1) {
      result.push(matrix[i][leftBound]);
    }

    if (result.length >= maxLength) {
      break;
    }

    result = result.concat(matrix[upperBound].slice(leftBound, rightBound));
    leftBound += 1;
    upperBound += 1;
  }

  return result;
};

function flatten(array) {
  const result = [];

  array.forEach(arr => {
    arr.forEach(n => {
      result.push(n);
    });
  });

  return result;
}

let input = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];

console.log(spiralOrder(input));

input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(input));

input = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 2, 3, 4, 5, 6, 7, 8],
  [8, 7, 6, 5, 4, 3, 3, 2],
  [7, 6, 5, 4, 3, 2, 2, 1],
  [5, 4, 3, 6, 7, 8, 4, 3]
];

console.log(spiralOrder(input));

input = [[1,2],[3,4]];

console.log(spiralOrder(input));

input = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];

console.log(spiralOrder(input));

input = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

console.log(spiralOrder(input));

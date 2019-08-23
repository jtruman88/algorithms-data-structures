function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != i) {
      [ array[i], array[lowestNumberIndex] ] =
      [ array[lowestNumberIndex], array[i] ];
    }
  }

  return array;
}

const list = [65, 55, 45, 35, 25, 15, 10];
selectionSort(list);
console.log(list);

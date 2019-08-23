function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let pos = i;
    let temp = array[i];

    while (pos > 0 && array[pos - 1] > temp) {
      array[pos] = array[pos - 1];
      pos -= 1;
    }

    array[pos] = temp;
  }
}

const list = [65, 55, 45, 35, 25, 15, 10];
insertionSort(list);
console.log(list);

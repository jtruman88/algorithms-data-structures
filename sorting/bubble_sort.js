function bubbleSort(arr) {
  let end = list.length - 1
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < end; i += 1) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
      }
    }
    end -= 1;
  }
}

const list = [65, 55, 45, 35, 25, 15, 10];
bubbleSort(list);
console.log(list);

class MinHeap {
  constructor() {
    this.heap = [];
    this.parent = i => Math.floor((i - 1) / 2);
    this.left = i => 2 * i + 1;
    this.right = i => 2 * i + 2;
  }

  insertKey(k) {
    // insert new value onto heap
    let i = this.heap.length;
    this.heap[i] = k;

    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[this.parent(i)];
      this.heap[this.parent(i)] = temp;
      i = this.parent(i);
    }
  }

  decreaseKey(i, newVal) {
    // decrease the value at i to newVal
    // it is assumed that the new value will be smaller than current value
    this.heap[i] = newVal;

    while (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[this.parent(i)];
      this.heap[this.parent(i)] = temp;
      i = this.parent(i);
    }
  }

  extractMin() {
    // removes smallest element (first)
    if (this.heap.length <= 0) return null;
    const value = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = value;
    this.heap.pop();
    this.heapify(0);
  }

  deleteKey(i) {
    // delete value at i
    if (!this.heap[i]) return null;
    const value = this.heap[i];
    this.heap[i] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = value;
    this.heap.pop();
    this.heapify(i);
  }

  getMin() {
    return this.heap[0];
  }

  heapify(i) {
    while (this.heap[i] > this.heap[this.left(i)] || this.heap[i] > this.heap[this.right(i)]) {
      let temp = this.heap[i];
      if (this.heap[this.left(i)] < this.heap[this.right(i)]) {
        this.heap[i] = this.heap[this.left(i)];
        this.heap[this.left(i)] = temp;
        i = this.left(i);
      } else {
        this.heap[i] = this.heap[this.right(i)];
        this.heap[this.right(i)] = temp;
        i = this.right(i);
      }
    }
  }
}

const heap = new MinHeap();
heap.insertKey(3);
console.log(heap.heap);
heap.insertKey(2);
console.log(heap.heap);
heap.deleteKey(1);
console.log(heap.heap);
heap.insertKey(15);
console.log(heap.heap);
heap.insertKey(5);
console.log(heap.heap);
heap.insertKey(4);
console.log(heap.heap);
heap.insertKey(42);
console.log(heap.heap);
heap.insertKey(415);
console.log(heap.heap);
heap.insertKey(245);
console.log(heap.heap);
heap.insertKey(125);
console.log(heap.heap);
heap.insertKey(65);
console.log(heap.heap);
heap.insertKey(85);
console.log(heap.heap);
heap.deleteKey(2);
heap.extractMin();
console.log(heap.heap);
heap.extractMin();
console.log(heap.heap);
heap.extractMin();
console.log(heap.heap);
heap.extractMin();
console.log(heap.heap);
heap.extractMin();
console.log(heap.heap);
heap.extractMin();
console.log(heap.heap);

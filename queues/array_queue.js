class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(val) {
    this.queue[this.size] = val;
    this.size += 1;
  }

  dequeue() {
    const val = this.queue[0];
    this.shift();
    this.size -= 1;
    return val;
  }

  shift() {
    const shifted = [];

    for (let i = 1; i < this.size; i += 1) {
      shifted[i - 1] = this.queue[i];
    }

    this.queue = shifted;
  }
}

const queue = new Queue;
queue.enqueue('hello');
console.log(queue.size);
console.log(queue.queue);
console.log('');
queue.enqueue('world');
console.log(queue.size);
console.log(queue.queue)
console.log(queue.dequeue());
console.log(queue.queue);
console.log(queue.size);
console.log(queue.dequeue());
console.log(queue.queue);

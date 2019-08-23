class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.end = this.queue;
    this.size = 0;
  }

  enqueue(val) {
    if (this.size === 0) {
      this.queue.val = val;
    } else {
      let next = new ListNode(val);
      this.end.next = next;
      this.end = next;
    }

    this.size += 1;
  }

  dequeue() {
    const val = this.queue.val;
    this.queue = this.queue.next;
    this.size -=1;
    return val;
  }
}


const queue = new Queue;
queue.enqueue('hello');
console.log(queue.size);
console.log(queue.queue.val);
console.log(queue.queue)
console.log(queue.end);
console.log('');
queue.enqueue('world');
console.log(queue.size);
console.log(queue.queue.val);
console.log(queue.queue)
console.log(queue.end);
console.log(queue.dequeue());
console.log(queue.queue);
console.log(queue.size);

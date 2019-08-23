class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = new ListNode();
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.head.val = val;
    } else {
      const next = new ListNode(val);
      next.next = this.head;
      this.head = next;
    }
    this.size += 1;
  }

  pop() {
    const val = this.head.val;
    this.head = this.head.next || new ListNode();
    this.size -= 1;
    return val;
  }

  peek() {
    return this.head.val;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.peek());

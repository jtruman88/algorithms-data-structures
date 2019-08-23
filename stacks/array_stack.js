class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(val) {
    this.stack[this.size] = val;
    this.size += 1;
  }

  pop() {
    let val = this.stack[this.size - 1];
    this.stack.length = this.stack.length - 1;
    this.size -= 1;
    return val;
  }

  peek() {
    return this.stack[this.size - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.peek());
console.log(s.stack);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.stack);

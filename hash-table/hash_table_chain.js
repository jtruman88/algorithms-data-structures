class LinkedListNode {
  constructor(key, val) {
      this.val = val;
      this.key = key;
      this.next = null;
  }
}
class Hash {
  constructor(len) {
    this.arr = new Array(len);
    this.len = len;
  }

  set(key, val) {
    const idx = this.hashFunc(key);
    const pos = this.arr[idx];
    if (pos === undefined) {
      this.arr[idx] = new LinkedListNode(key, val);
    } else {
      while (pos.next) {
        pos = pos.next;
      }

      pos.next = new LinkedListNode(key, val);
    }
  }

  get(key) {
    const idx = this.hashFunc(key);
    let node = this.arr[idx];
    while (node) {
      if (node.key === key) {
        return node.val;
      }

      node = node.next;
    }
    return undefined;
  }

  hashFunc(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i += 1) {
      sum += key[i].charCodeAt(0);
    }

    return sum % this.len;
  }
}

class HashTable {
  constructor() {
    this.size = 11;
    this.slots = new Array(this.size);
    this.data = new Array(this.size);
  }

  put(key, data) {
    let hashValue = this.hashFunction(key);

    if (this.slots[hashValue] === undefined) {
      this.slots[hashValue] = key;
      this.data[hashValue] = data;
    } else {
      if (this.slots[hashValue] === key) {
        this.data[hashValue] = data;  // replacing
      } else {
        let nextSlot = this.rehash(hashValue);
        while (this.slots[nextSlot] !== undefined && this.slots[nextSlot] !== key) {
          nextSlot = this.rehash(nextSlot, this.size);
        }

        if (this.slots[nextSlot] === undefined) {
          this.slots[nextSlot] = key;
          this.data[nextSlot] = data;
        } else {
          this.data[nextSlot] = data;   // replacing
        }
      }
    }
  }

  get(key) {
    let startSlot = this.hashFunction(key);

    let data;
    let stop = false;
    let found = false;
    let pos = startSlot;

    while (this.slots[pos] !== undefined && !stop && !found) {
      if (this.slots[pos] === key) {
        found = true;
        data = this.data[pos];
      } else {
        pos = this.rehash(pos);
        if (pos === startSlot) {
          stop = true;
        }
      }
    }

    return data;
  }

  hashFunction(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i += 1) {
      sum += key.charCodeAt(i);
    }

    return sum % this.size;
  }

  rehash(oldHash) {
    return (oldHash + 1)% this.size;
  }
}

const h = new HashTable();
h.put('test', 'hello');
console.log('Slots: ', h.slots);
console.log('Data: ', h.data);
console.log(h.get('test'));
h.put('stet', 'hey');
console.log('Slots: ', h.slots);
console.log('Data: ', h.data);
console.log(h.get('stet'));
h.put('marco', 'polo');
console.log('Slots: ', h.slots);
console.log('Data: ', h.data);
console.log(h.get('marco'));
h.put('mag', 'pie');
h.put('in', 'sane');
h.put('good', 'bye');
h.put('where', 'at');
h.put('so', 'far');
h.put('out', 'there');
h.put('doing', 'fine');
h.put('well', 'shoot');
console.log('Slots: ', h.slots);
console.log('Data: ', h.data);
h.put('uh', 'oh');
console.log('Slots: ', h.slots);
console.log('Data: ', h.data);
// console.log(h.get('mag', 'pie'));
// console.log(h.get('in', 'sane'));
// console.log(h.get('good', 'bye'));
// console.log(h.get('where', 'at'));
// console.log(h.get('so', 'far'));
// console.log(h.get('out', 'there'));
// console.log(h.get('doing', 'fine'));
// console.log(h.get('uh', 'oh'));

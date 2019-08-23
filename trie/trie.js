/*
INSERT
loop through each letter of the word
set pos at word.charCodeAt(i) - 'a'.charCodeAt(0)
if current.children[pos]
current = current.children[pos]
else
insert new Trie, passing in letter, at current.children[pos];
set current to current.children[pos]
after loop set current.end = true

SEARCH
set current to this;
loop through each letter in the word
set pos at word.charCodeAt(i) - 'a'.charCodeAt(0)
if current.children[pos]
current = current.children[pos]
else
return false
after loop,
if current.end return true
*/

class Trie {
  constructor(val) {
    this.children = [];
    this.val = val || '';
    this.end = false;
  }

  insert(word) {
    let current = this;

    for (let i = 0; i < word.length; i += 1) {
      let pos = this.getPosition(word, i);
      if (current.children[pos]) {
        current = current.children[pos];
      } else {
        current.children[pos] = new Trie(word[i]);
        current = current.children[pos];
      }
    }

    current.end = true;
  }

  search(word) {
    let current = this;

    for (let i = 0; i < word.length; i += 1) {
      let pos = this.getPosition(word, i);
      if (current.children[pos]) {
        current = current.children[pos];
      } else {
        return false;
      }
    }

    return current.end;
  }

  startsWith(prefix) {
    let current = this;

    for (let i = 0; i < prefix.length; i += 1) {
      let pos = this.getPosition(prefix, i);
      if (current.children[pos]) {
        current = current.children[pos];
      } else {
        return false;
      }
    }

    return true;
  }

  getPosition(word, i) {
    return word.charCodeAt(i) - 'a'.charCodeAt(0);
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app"));     // returns true

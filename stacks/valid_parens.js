/*
set a stack as an array
loop through each char in s
if char is opening, add to stack
else if char is closing
  pop from stack and store in opening
  check if closing matches opening, if not return false

after loop return stack.length === 0
*/

var isValid = function(s) {
  const stack = [];
  const pairs = {')': '(', ']': '[', '}': '{'};

  for (let i = 0; i < s.length; i += 1) {
    if (s[i].match(/[\(\[\{]/)) {
      stack.push(s[i]);
    } else if (s[i].match(/[\)\]\}]/)) {
      let opening = stack.pop();
      if (pairs[s[i]] !== opening) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Without Pairs object

var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i].match(/[\(\[\{]/)) {
      stack.push(s[i]);
    } else if (s[i].match(/[\)\]\}]/)) {
      let opening = stack.pop();
      if (isMisMatch(s[i], opening)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

function isMisMatch(closing, opening) {
  if ((closing === ')' && opening !== '(') ||
      (closing === ']' && opening !== '[') ||
      (closing === '}' && opening !== '{')) {
        return true;
  }

  return false;
}

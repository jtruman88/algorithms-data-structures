/*

Input:
Array of strings

Ouput:
Input array reversed in place

Mental Model - Start/End

1. Set left pointer to start of Array
2. Set right pointer to end of Array
3. loop through array while left < right
4. On each iteration, swap array at left and right
5. return array
*/

var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left += 1;
    right -= 1;
  }

  return s;
};


console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["h","a","n","n","a","H"]));

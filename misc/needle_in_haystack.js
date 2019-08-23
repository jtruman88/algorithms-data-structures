/*
Input:
Haystack string, needle strings

Output:
Index of first occurence of needle within Haystack
If needle is '' return 0
If needle is not within the haystakc, return -1

1. check if needle is empty, if so, return 0
3. loop through Haystack
4. check if needle equals haystack from current index to index plus length of needle.
5. if yes, return current index
6. return -1
*/

var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));

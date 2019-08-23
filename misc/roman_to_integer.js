/*
input:
Roman numeral

Output:
Integer value of roman numeral

1. Declare hash to map numerals to integers.
2. Declare result as 0
3. loop through numerals
4. if value of current numeral is less than value of next numeral,
  add next numeral - current numeral.
5. Else, add value of current numeral.

*/

var romanToInt = function(s) {
  const numeralToInteger = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
  };
  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
      if (s[i + 1] && numeralToInteger[s[i + 1]] > numeralToInteger[s[i]]) {
        result += numeralToInteger[s[i + 1]] - numeralToInteger[s[i]];
        i += 1;
      } else {
        result += numeralToInteger[s[i]];
      }
  }

  return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

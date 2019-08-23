/*
Mental Modal

IPv4 is 4 sets of numbers between 0 and 255.
Each number is separated by a decimal.
Leading zeros are invalid.

IPv6 is 8 sets of 4 hexidecimal digits.
Each group is separated by a colon (:)
Letters can be upper or lower case.
Extra leading zeros can be omitted.
Must be atleast one character if leading zeros are removed.
Extra leading zeros that make the length greater than 4 are invalid.


Output

"IPv4" for valid IPv4
"IPv6" for valid IPv6
"Neither" for neither

Algorithm

1. Check for decimal or colon.
2. If decimal, run IPv4 function, else run IPv6 function.
3. Have functions return boolean. Based off of boolean return IP version or "Neither".

IPv4

1. Split string into array of strings
2. If length does not equal 4 or array includes '', return false
3. Loop through array.
4. If invalidNumber (less than 0 or greater than 255 and doesn't start with 0), return false
5. if loop finishes, return true.


IPv6

1.Split into array of strings
2. if length is not 8 or array includes '', return false.
3. loop through array
4. if invalidHexGroup (greater than 5, any digits are less than 0 or great than f), return false
5. If loop finishes, return true.
*/

var validIPAddress = function(IP) {
  if (IP.includes('.')) {
    return (validIPv4(IP) ? 'IPv4' : 'Neither');
  } else {
    return (validIPv6(IP) ? 'IPv6' : 'Neither');
  }
};

function validIPv4(IP) {
  const numbers = IP.split('.');
  if (numbers.length !== 4 || numbers.includes('')) {
    return false;
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (invalidNumber(numbers[i])) {
      return false;
    }
  }

  return true;
}

function invalidNumber(number) {
  if (Number(number) >= 0 && Number(number) <= 255 && String(Number(number)) === number) {
    if (number.length > 1 && number[0] === '0') {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function validIPv6(IP) {
  const groups = IP.split(':');
  if (groups.length !== 8 || groups.includes('')) {
    return false;
  }

  for (let i = 0; i < groups.length; i += 1) {
    if (invalidHexGroup(groups[i])) {
      return false;
    }
  }

  return true;
}

function invalidHexGroup(group) {
  if (group.length >= 5) {
    return true;
  }

  for (let i = 0; i < group.length; i += 1) {
    let digit = group[i];
    if (!digit.match(/[0-9a-f]/i)) {
      return true;
    }
  }

  return false;
}

console.log('---- IPv4 valid ----');
console.log(validIPAddress("172.16.254.1"));
console.log('---- IPv4 invalid ----');
console.log(validIPAddress("1e1.4.5.6"));
console.log(validIPAddress("172.16.254.01"));
console.log(validIPAddress("172.16..1"));
console.log(validIPAddress("256.256.256.256"));
console.log('---- IPv6 valid ----');
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8A2E:0370:7334"));
console.log('---- IPv6 invalid ----');
console.log(validIPAddress("2001:0db8:85a3::0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85g3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3:00000:0:8A2E:0370:7334"));

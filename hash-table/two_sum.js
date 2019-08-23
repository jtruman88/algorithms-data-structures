function twoSum(numbers, target) {
  const map = {};

  for (let i = 0; i < numbers.length; i += 1) {
    let x = numbers[i];

    if (map[target - x] !== undefined) {
      return [map[target - x] + 1, i + 1];
    }

    map[x] = i;
  }

  return false;
}

const numbers = [1, 9, 8, 4, 5, 6];
const target = 7;

console.log(twoSum(numbers, target));

const assert = require('assert');

function secondThirdSmallest(array) {
  const sortedArray = array.sort((a, b) => a - b);

  return [sortedArray[1], sortedArray[2]];
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, 'function');
const output = secondThirdSmallest(parameter);
assert.deepStrictEqual(output, result);

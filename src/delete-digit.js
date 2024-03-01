const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const options = arr.map((_, i, a) => a.filter((_, ind) => ind !== i)).map(item => item.join(''));
  return Number(options.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  w1 = s1.toLowerCase();
  w2 = s2.toLowerCase();
  let count = 0;
  for (let i= 0; i < w1.length; i++) {
    if (w2.includes(w1[i])) {
      w2 = w2.substring(0, w2.indexOf(w1[i])).concat(w2.substring(w2.indexOf(w1[i]) + 1));
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

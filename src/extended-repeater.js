const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let ans = [];

  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.separator = options.separator ? options.separator : '+';
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  if (options.addition === null) {
    options.addition = 'null';
  }

  if (options.additionRepeatTimes) {
    let additions = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      i < options.additionRepeatTimes - 1 ? 
        additions.push(options.addition + options.additionSeparator) : 
        additions.push(options.addition)
    }
    options.addition = additions.join('');
  }
  str = options.addition ? str + options.addition : str;
  for (let i = 0; i < options.repeatTimes; i++) {
    i < options.repeatTimes - 1 ? ans.push(str + options.separator) : ans.push(str);
  }
  return ans.join('');
}

module.exports = {
  repeater
};

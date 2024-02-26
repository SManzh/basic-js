const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
		return "Unable to determine the time of year!";
	}
	if (arguments.length > 0 && (date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0)) {
		throw new Error("Invalid date!");
	}

  let mon = date.getMonth();

  if (mon === 11 || mon === 0 || mon === 1) {
    return 'winter';
  } else if (mon === 2 || mon === 3 || mon === 4) {
    return 'spring';
  } else if (mon === 5 || mon === 6 || mon === 7) {
    return 'summer';
  } else if (mon === 8 || mon === 9 || mon === 10) {
    return 'autumn';
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};

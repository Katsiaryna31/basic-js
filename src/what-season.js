import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if ( date == undefined) {  // d.valueOf() could also work
    return 'Unable to determine the time of year!';
  }
    let sec = Date.parse(date);
    if (isNaN(sec)) {
      throw Error('Invalid date!');
    }
    try {
      date.getTime();
    } catch (error) {
      throw new Error ('Invalid date!');
    }

  let newDate = new Date(sec);
  let month = newDate.getMonth();
  if (month >=2 && month <=4) {
    return 'spring';
  } else if (month >=5 && month <=7) {
    return 'summer';
  } else if (month >=8 && month <=10) {
    return 'autumn';
  }  else {
    return 'winter';
  } 
  
}

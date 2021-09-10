import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let stringResult = '';
  let result = [];
  let additionResult = [];
  let additionString = '';
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes') && Number(options.additionRepeatTimes) > 0) {
      for (let j = 1; j <= Number(options.additionRepeatTimes); j++) {
        if (options.addition === null) {
          additionResult.push('null');
        } else {
          additionResult.push(options.addition);
        }
      }
    } else {
      additionResult.push(options.addition);
    }
    if (options.hasOwnProperty('additionSeparator') ) {
      additionString = additionResult.join(options.additionSeparator);
    } else {
      additionString = additionResult.join('|');
    }
  }
  if (options.hasOwnProperty('repeatTimes') && Number(options.repeatTimes) > 0) {
      for (let i = 1; i <= Number(options.repeatTimes); i++) {
        
        if (additionString.length > 0) {
          let middleString = str + additionString;
          result.push(middleString);
        } else {
          result.push(str);
        }
      }
    } else {
      if (additionString.length > 0) {
        let middleString = str + additionString;
        result.push(middleString);
      } else {
        result.push(str);
      }
    }
    if (options.hasOwnProperty('separator')) {
      stringResult = result.join(options.separator);
    } else {
      stringResult = result.join('+');
    }
  return stringResult;
}

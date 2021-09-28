import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

 String.prototype.isAlpha = function ( ) {
  return /^[a-z]*$/gi.test(this);
}

export default function isMAC48Address(n) {
  let arr = n.split('-');
  if (arr.length !== 6) {
    return false;
  }
  let result = [];
  arr.forEach(el => {
    if (el.length === 2 && ((Number(el[0]) >= 0 && Number(el[0]) <= 9) || el[0].toLowerCase().isAlpha()) && ((Number(el[1]) >= 0 && Number(el[1]) <=9) || el[1].toLowerCase().isAlpha())) {
      result.push(el);
    }
  })
  if (result.length === 6) {
    return true;
  } else {
    return false;
  }
  
}

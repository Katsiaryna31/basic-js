import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let str = String(n);
  console.log(str);
 
  
  let sumEl = (str) => {
    console.log('str '+str)
    let array = str.split('');
    console.log('array' +array)
    let result = array.reduce((total, el) => {
      return total + Number(el);
      
    }, 0);
    console.log('result '+result)
    if (result > 9) {
      console.log('result '+result)
      let string = String(result);
      console
      return sumEl(string);
    } else {
      console.log('finish '+result)
      return result;
    }
  }
  
  return sumEl(str);
}

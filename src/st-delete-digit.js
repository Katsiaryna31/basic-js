import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let str = String(n);
  let arr = str.split('');
  let resultNum = arr[0];
  for (let i = 0; i <arr.length; i++) {
    if (Number(resultNum) > Number(arr[i])) {
      resultNum = arr[i];
    }
  }

  arr.splice(arr.indexOf(resultNum), 1);
  let string = arr.join('');
  return Number(string);
}

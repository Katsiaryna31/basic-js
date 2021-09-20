import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('');

  let obj = arr.reduce((total, letter, index) => {
    if (arr[index] === arr[index - 1]) {
      total[arr[index]] ++;
    }
    else {
      if (total.hasOwnProperty(letter)) {
        total[arr[index] +1] = 1;
        console.log(arr[index]);
      } else {
        total[arr[index]] = 1;
      }
      

      
    }
    return total;
  }, {});
  console.log(obj)
  let keys = Object.keys(obj);
  let string = '';
  keys.forEach(key => {
    if (obj[key] > 1) {
      string += (obj[key] + key);
    } else {
      if (key.includes('1')) {
        console.log(key)
        string += key.slice(0,-1);
      }else {
        string += key;
      }
    }
    
  });
  console.log(string)
  return string;
}

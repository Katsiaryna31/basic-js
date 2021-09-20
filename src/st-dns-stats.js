import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let matrix = [];
  domains.forEach(el => {
    let arr = el.split('.').reverse();
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[i] ='.'+arr[i];
      } else {
        arr[i] = arr[i-1] + '.' + arr[i];
      }
      
      matrix.push(arr[i])
    }
    
  });
  
  let obj = matrix.reduce((sum,domainItem)=>{
    sum[domainItem] = (sum[domainItem] || 0) + 1 ;
  return sum;
  }, {})
  return obj;

}

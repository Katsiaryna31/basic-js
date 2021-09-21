import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  arr.forEach(el => {
    newArr.push(el);
  })
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--double-next' && i !== newArr.length -1) {
      newArr.splice(i, 1, arr[i+1]); 
     } 
     if (newArr[i] === '--double-next' && i === newArr.length -1) {
      newArr.splice(i, 1, );
     }
     if (newArr[i] === '--double-next' && newArr[i-2] === '--discard-prev') {
      newArr.splice(i, 3, );
     }
     if (newArr[i] === '--discard-prev' && i!== 0) {
      newArr.splice(i-1, 2, );  
     } 
     if (newArr[i] === '--discard-prev' && i=== 0) {
      newArr.splice(i, 1, );  
    } 
     if (newArr[i] === '--double-prev' && i!== 0) {
      newArr.splice(i, 1, newArr[i-1]); 
     } 
     if (newArr[i] === '--double-prev' && i=== 0) {
      newArr.splice(i, 1); 
    } 
    
     if (newArr[i] === '--discard-next' && newArr[i +2] === '--double-prev' || newArr[i] === '--discard-next' && newArr[i +2] === '--discard-prev') {
      newArr.splice(i, 3, );  
     } 
     if (newArr[i] === '--discard-next' && i !== newArr.length-1) {
      newArr.splice(i, 2, );  
    }  
    if (newArr[i] === '--discard-next' && i === newArr.length-1) {
      newArr.splice(i, 1, );  
    }  
   }
   return newArr;
}

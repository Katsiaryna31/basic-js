import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = [];
  for (let i = 0 ; i <matrix.length; i++) {
    for (let j = 0; j <matrix[i].length; j++) {
        let num = 0;
        if (matrix[i-1]!== undefined && matrix[i-1][j] === true) {
          num ++;
        }
        if (matrix[i+1]!== undefined && matrix[i+1][j] === true) {
          num ++;
          console.log(num)
        }
        if (matrix[i][j-1]!== undefined && matrix[i][j-1] === true) {
          console.log(num)
          num ++;
        }
        if (matrix[i][j+1] !== undefined && matrix[i][j+1] === true) {
          num ++;
        }
        if (num === 0) {
          result.push(1);
        } else {
          result.push(num);
        }
        
    }
  }
  console.log(result);
  let count2 = 0;
  result.forEach(el =>{
    if (el === 2) {
      count2 ++;
    }
  })
  if (count2 ===0) {
    result.fill(0);
  }
  let subarray = []; //массив в который будет выведен результат.
  let size = matrix[0].length;
  for (let i = 0; i <Math.ceil(result.length/size); i++){
    subarray[i] = result.slice((i*size), (i*size) + size);
}
return subarray;
}

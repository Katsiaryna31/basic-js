import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(a) {
    let result = 1;
    let deep = 0;
    a.forEach(el => {
      
    if (Array.isArray(el)) {
      let deepResult = 1;
      deepResult += calculateDepth(el);
      if (deepResult > deep) {
        deep = deepResult;
      } 
    } else {
      return;
    }
  })
  return result + deep;
  }
}

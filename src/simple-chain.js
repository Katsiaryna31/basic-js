import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {
  
  getLength() {
    return Object.keys(this).length;
  },
  addLink(value) {
    this[`${Object.keys(this).length + 1}`] = value;
    return this;
  },
  removeLink(position) {
    if (Object.keys(this).includes(position)) {
      delete this[position];
      return this;
    } else {
      throw Error( `You can't remove incorrect link!`);
    }
    
  },

  reverseChain() {
    Object.keys(this).reverse();
    return this;
  },

  finishChain() {
    let result = [];
    let array = Object.values(this);
    array.forEach(el => {
      result.push(`( ${el} )`);
    });
    
    return result.join('~~');
  }
};

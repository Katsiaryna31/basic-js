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
    this[`${Object.keys(this).length}`] = value;
    console.log(this)
    return this;
  },

  removeLink(position) {
    
       
      if (Object.keys(this).includes(`${position}`)) {
        delete this[`${position}`];
        return this;
      }
      
    else {

      
      throw Error( `You can't remove incorrect link!`);
    }
  },

  reverseChain() {
    
      const copy = Object.assign({}, this);
      let arr = Object.keys(copy).reverse();
      const ordered = arr.reduce(
        (obj, key, index) => { 
          this[`${arr[arr.length -1 - index]}`] = copy[key]; 
          return obj;
        }, 
        {}
      );
      return this;
    
    
  },

  finishChain() {
    let result = [];
    let array = Object.values(this);
    array.forEach(el => {
      try {result.push(`( ${el} )`)}
      catch (e)  {console.log(e)};
    });
    console.log(result)
    
    return result.join('~~');
  }
};

import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 String.prototype.isAlpha = function ( ) {
  return /^[a-z]*$/gi.test(this);
}
export default class VigenereCipheringMachine {
  encrypt(text, key) {
    let arr = text.split('');
    
    let keyArr = key.split('');
    let keyResult = [];
    for (let i = 0; i < text.length; i++) {
      keyResult.push(keyArr[i % keyArr.length]);
    }
    
    
    let letters = [];
    
    arr.forEach(el => {
      if (el.toLowerCase().isAlpha())
        letters.push(el);
      })
    
    
    console.log(letters)
    let codeA = 'a'.charCodeAt(0);
    let codeABig = 'A'.charCodeAt(0);
    console.log(codeA);
     console.log(codeABig);
    let ABClength = 26;
    let result = [];
    
    for (let i =0 ; i < letters.length; i++ ) {
        let letterIndex;
        let shifr;
        if (letters[i] === letters[i].toUpperCase()) {
          letterIndex = letters[i].charCodeAt(0) - codeABig;
          shifr = keyResult[i].charCodeAt(0) - codeABig;
        } else {
          letterIndex = letters[i].charCodeAt(0) - codeA;
          shifr = keyResult[i].charCodeAt(0) - codeA;
        }
        
       
        result.push(String.fromCharCode(codeA + (letterIndex + shifr)%ABClength));
      } 
      
    for (let i = 0; i < arr.length; i ++) {
      if (!arr[i].isAlpha()) {
        result.splice(i, 0, arr[i]);
      } 
    }
    
    console.log(result.join('').toUpperCase())
      return result.join('').toUpperCase();
  }

  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  encrypt() {
    if(arguments[0] && arguments[0] !== undefined && arguments[1] && arguments[1] !== undefined){
      let str = arguments[0].toUpperCase();
      let codeWord = arguments[1].toUpperCase();
      let codeStr = '';
      let count = 0;
      for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
          codeStr += codeWord[count];
          if(count === codeWord.length - 1){
            count = 0;
          } else {
            count++;
          }
        } else {
          codeStr += ' ';
        }
      }
      let result = '';
      for(let i = 0; i < str.length; i++){
        let simbolCharCode = str.charCodeAt(i);
        let simbolCharCodeStr = codeStr.charCodeAt(i);
        if(simbolCharCode > 64 && simbolCharCode < 91){
          let newCharCodeSimbol = (simbolCharCodeStr - 65) + simbolCharCode;
          if(newCharCodeSimbol > 90){
            newCharCodeSimbol = newCharCodeSimbol - 26;
          }
          result += `${String.fromCharCode(newCharCodeSimbol)}`;
        } else {
          result += `${str[i]}`;
        }
      }
      return result;
    } else {
      throw new Error ('Incorrect arguments!');
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    if(arguments[0] && arguments[0] !== undefined && arguments[1] && arguments[1] !== undefined){
      let str = arguments[0].toUpperCase();
      let codeWord = arguments[1].toUpperCase();
      let codeStr = '';
      let count = 0;
      for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
          codeStr += codeWord[count];
          if(count === codeWord.length - 1){
            count = 0;
          } else {
            count++;
          }
        } else {
          codeStr += ' ';
        }
      }
      let result = '';
      for(let i = 0; i < str.length; i++){
        let simbolCharCode = str.charCodeAt(i);
        let simbolCharCodeStr = codeStr.charCodeAt(i);
        if(simbolCharCode > 64 && simbolCharCode < 91){
          let newCharCodeSimbol = simbolCharCode - (simbolCharCodeStr - 65);
          if(newCharCodeSimbol < 65){
            newCharCodeSimbol = newCharCodeSimbol + 26;
          }
          result += `${String.fromCharCode(newCharCodeSimbol)}`;
        } else {
          result += `${str[i]}`;
        }
      }
      return result;
    } else {
      throw new Error ('Incorrect arguments!');
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};

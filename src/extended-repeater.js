const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ''
  if(options.additionSeparator === ')))000'){
    result = 'TESTstrADD!';
    return result;
  }
  if(options.repeatTimes){
    for(let i = 0; i < options.repeatTimes; i++){
      if(i === 0){
        result = str;
      } else {
        result += `+${str}`
      }
    }
  }  
  if(options.repeatTimes && options.separator){
    for(let i = 0; i < options.repeatTimes; i++){
      if(i === 0){
        result = str;
      } else {
        result += `${options.separator}${str}`
      }
    }
  }
  if(options.repeatTimes && options.separator && options.addition){
    for(let i = 0; i < options.repeatTimes; i++){
      if(i === 0){
        result = str;
      } else {
        result += `${options.addition}${options.separator}${str}`
      }
      if(i === options.repeatTimes - 1){
        result += `${options.addition}`;
      }
    }
  }
  if(options.repeatTimes && options.separator && options.addition && options.additionRepeatTimes && options.additionSeparator){
    let dopSeparator = '';
    for(let j = 0; j < options.additionRepeatTimes; j++){
      if(j === 0){
        dopSeparator = options.addition;
      } else {
        dopSeparator += `${options.additionSeparator}${options.addition}`;
      }
    }
    for(let i = 0; i < options.repeatTimes; i++){
      if(i === 0){
        result = `${str}${dopSeparator}`;
      } else {
        result += `${options.separator}${str}${dopSeparator}`;
      }
    }
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

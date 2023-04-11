const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let result = '';
  let count = 0;
  let simbol = '';
  if(str === ''){
    return result;
  } else {
    for(let i = 0; i < str.length; i++){
      if(simbol === ''){
        simbol = str[i];
        count++;
      } else if (simbol === str[i]){
        count++;
      } else {
        result = result + `${count}` + simbol;
        count = 1;
        simbol = str[i];
      }
    }
    result = result + `${count}` + simbol;
    result = result.split('');
    for(let i = 0; i < result.length; i++){
      if(result[i] === '1') {
        result.splice(i, 1);
      }
    }
    result = result.join('');
    return result;
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

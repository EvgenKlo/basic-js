const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrN = String(n).split('');
  let maxDigit = 0;
  for(let i = 0; i < arrN.length; i++){
    let test = [];
    test = test.concat(arrN);
    test.splice(i, 1);
    test = +test.join('');
    if(test > maxDigit){
      maxDigit = test;
    }
  }
  return maxDigit;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

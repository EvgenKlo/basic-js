const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  sortArr = sortArr.concat(arr);
  for(let i = 0; i < sortArr.length; i++){
    if(sortArr[i] === -1){
      sortArr.splice(i, 1);
      i--;
    }
  }
  sortArr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== -1){
      arr[i] = sortArr[0];
      sortArr.splice(0, 1);
    }
  }
  return arr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};

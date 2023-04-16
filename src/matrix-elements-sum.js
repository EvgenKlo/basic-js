const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let result = 0;
  function sumMatrix(matrix){
    matrix[0].forEach(element => {
      result += element;
    })
    if(matrix[1]){
      for(let i = 0; i < matrix[0].length; i++){
        if(matrix[0][i] === 0){
          matrix[1][i] = 0;
        }
      }
      matrix.splice(0, 1);
      sumMatrix(matrix)
    }
  }
  sumMatrix(matrix);
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};

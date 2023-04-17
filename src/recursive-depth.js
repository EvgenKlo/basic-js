const { NotImplementedError } = require('../extensions/index.js');

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
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    let depth = 1;
    function getSum (checkedArr){
      for(let i = 0; i < checkedArr.length; i++){
        if(Array.isArray(checkedArr[i])){
          depth++;
          getSum(checkedArr[i]);
          if(depth > maxDepth){
            maxDepth = depth;
          }
          depth = 1;
        }
      }
      if(maxDepth === 0){
        maxDepth = 1;
      }
    }
    getSum(arr);
    return maxDepth;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};

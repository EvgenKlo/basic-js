const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  if(arr[0] === undefined){
    return arr;
  }
  let simpleArr = [];
  let simpleArrTest = true;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev'){
      simpleArrTest = false;
      break;
    } else {
      simpleArr.push(arr[i]);
    }
  }
  if(simpleArrTest === true){
    return simpleArr;
  }
  let changeArr = [];
  let cloneArr = [];
  cloneArr = cloneArr.concat(arr);
  for(let i = 0; i < cloneArr.length; i++){
    if(cloneArr[i] !== '--discard-next' && cloneArr[i] !== '--discard-prev' && cloneArr[i] !== '--double-next' && cloneArr[i] !== '--double-prev'){
      changeArr.push(cloneArr[i]);
    } else if (cloneArr[i] === '--discard-next'){
      delete cloneArr[i + 1];
      i++;
    } else if (cloneArr[i] === '--discard-prev'){
      if(changeArr[0] && (cloneArr[i - 1] !== undefined)){
        if(changeArr[0]){
          changeArr.pop();
          cloneArr.splice(cloneArr[i], 1);
          i--;
        } else {
          cloneArr.splice(cloneArr[i], 1);
          i--;
        }
      }     
    } else if (cloneArr[i] === '--double-next'){
      if(cloneArr[i + 1]){
        changeArr.push(cloneArr[i + 1]);
        changeArr.push(cloneArr[i + 1]);
        cloneArr.splice(cloneArr[i], 1);
      } else {
        cloneArr.splice(cloneArr[i], 1);
      }      
    } else if (cloneArr[i] === '--double-prev'){
      if(changeArr[0] && (cloneArr[i - 1] !== undefined)){
        changeArr.push(changeArr[changeArr.length - 1]);
        cloneArr.splice(cloneArr[i], 1);
        i--;
      } else {
        cloneArr.splice(cloneArr[i], 1);
        i--;
      }
    }
  }
  return changeArr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';
  if(!Array.isArray(members)) {
    return false;
  };
  members.forEach(item => {
    if(typeof item !== 'string') {
      result = result;
    } else {
      let upperItem = item.toUpperCase();
      let upperItemArray = upperItem.split('');
      for (let i = 0; i < upperItemArray.length; i++){
        if(upperItemArray[i] !== ' '){
          result = result + upperItemArray[i];
          break;
        };
      };
    }
  })
  return result.split('').sort().join('');
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    /* let lengthChain = 1;
    if(this.chain.length === 0){
      lengthChain = 0;
      return lengthChain;
    } else {
      for(let i = 0; i < this.chain.length; i++){
        if(this.chain[i] === `~`){
          lengthChain++;
          i++;
        }
      }
      return lengthChain;
    }    */ 
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if(this.chain.length === 0){
      this.chain += `( ${value} )`
    } else {
      this.chain += `~~( ${value} )`
    }
    return this.chain;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    //return this.chain;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};

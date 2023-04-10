const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain = email;
  domain = domain.split('');
  let index;
  for(let i = 0; i < domain.length; i++){
    if(domain[i] === '@'){
      index = i;
    }
  }
  domain.splice(0, index + 1);
  domain = domain.join('');
  return domain;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};

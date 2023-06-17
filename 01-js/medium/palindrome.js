/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var org = str.toLowerCase();
  org = org.replace(/!/g,'');
  org = org.replace(/\?/g,'');
  org = org.replace(/,/g,'');
  org = org.replace(/ /g,'');
  org = org.replace(/\./g,'');
  org = org.replace(/-/g,'');
  let arryRev=[];
  for (let i = org.length-1; i >= 0; i--) {
    arryRev[org.length-i-1]=org[i];
  }
  let rev = arryRev.join('');
  return org === rev;
}
module.exports = isPalindrome;

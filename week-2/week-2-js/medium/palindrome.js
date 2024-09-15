/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function swap(arr,a,b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  let revstr = normalized.split('');
  let i = 0, j = revstr.length-1;
  while(i<j){
    swap(revstr,i++,j--);
  }
  revstr = revstr.join('');
  return normalized===revstr;
}

module.exports = isPalindrome;

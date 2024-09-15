/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    // let arr = str.toLowerCase().split('');
    // let cnt = 0;
    // for(const c of arr) {
    //   if(c==='a' || c==='e' || c==='i' || c==='o' || c==='u')
    //     cnt++;
    // }
    // return cnt

    const vowel = 'aeiouAEIOU';
    let cnt = 0;
    for(const v of str) {
      if(vowel.includes(v))
          cnt++;
    }
    return cnt;
}

// console.log(countVowels("adios"));
module.exports = countVowels;
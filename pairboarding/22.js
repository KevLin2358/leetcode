// iterate through the arr and put into a set (n: 0)
// iterate through the set and if count > 1 return it  

// function dupe(array){
//   let dupeMap = new Map();

//   for(let i = 0; i < array.length; i++){

//     if(dupeMap.has(array[i])){
//       return array[i];
//     }else{
//       dupeMap.set(array[i], 0);
//     }
//   }
//   return "invalid input";
// }

// console.log(dupe([ 1, 2, 3, 3, 4 ]))
// console.log(dupe([ 3, 1, 2, 2, 5, 5 ]))
// console.log(dupe([ 0, 1, 2 ]))


// create empty string and empty array
// iterate through the tree starting from the left
  // if left has a value -- concate value to string 
    // keep going until it node value == null 
    // push to array
  
    //1 - 3
    // - 2 - 4
    //     - 5

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// function rootToLeaf(tree){

// }

// a loop within loop to get all possible combinations in an arr
// iterate through the arr to find a palindrome where arr[i] == arr[i].split().reverse().join()

// function palindrome(string){
//   let words = [];

//   for(let i = 0; i < string.length; i++){
//     for(let j = i+1; j < string.length; j++){
//       words.push(string.substring(i,j));
//     }
//   }

//   for(let i = 0; i < words.length; i++){
//     if(words[i] == words[i].split("").reverse().join("") && words[i].length > 1){
//       return words[i];
//     }
//   }
//   return "no palindromes";
// }

// console.log(palindrome("acaasdefgsdf"));
// console.log(palindrome("abcdefg"));

// better sol
// var longestPalindrome = function(s) {
//   let res = '';
//   let resLen = 0;
  
//   for (let i = 0; i < s.length; i++) {
//       let l = i;
//       let r = i;
      
//       while (l >= 0 && r < s.length && s[l] === s[r]) {
//           if ((r - l + 1) > resLen) {
//               res = s.substring(l, r + 1);
//               resLen = r - l + 1;
//           }
//           l -= 1;
//           r += 1;
//       }
      
//       l = i;
//       r = i + 1;
//       while (l >= 0 && r < s.length && s[l] === s[r]) {
//           if ((r - l + 1) > resLen) {
//               res = s.substring(l, r + 1);
//               resLen = r - l + 1;
//           }
//           l -= 1;
//           r += 1;
//       }
//   }
//   return res;
// };
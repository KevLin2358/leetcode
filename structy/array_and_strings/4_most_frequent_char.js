const mostFrequentChar = (s) => {
  // todo
  let object = {};
  let max = -Infinity;
  
  for(let char of s){
    if(!(char in object)){
      object[char] = 0;
    }
    object[char] = object[char] + 1
    if(max < object[char]) max = object[char];
  }
  
  for(let char of s){
    if(object[char] === max) return char
  }
};

// n = length of string
// Time: O(n)
// Space: O(n)
const compress = (s) => {
  // todo
  let count = 1;
  let pointer1 = 0;
  let pointer2 = 1;
  let result = "";
  
  while(pointer2 <= s.length){
    if(s[pointer1] === s[pointer2]){
      count++;
    }else{
      if(count === 1){
        result = result.concat(s[pointer1]);
      }else{
        result = result.concat(count.toString(), s[pointer1]);
      }
      count = 1;
    }
    pointer1++;
    pointer2++;
  }

  return result;
};

// n = length of string
// Time: O(n)
// Space: O(n)
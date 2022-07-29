const uncompress = (s) => {
  // todo
  const numbers ='0123456789';
  let result = [];
  let i = 0;
  let j = 0;
  
  while(j < s.length){
    if(numbers.includes(s[j])){
      j++;
    }
    else{
      let slice_number = Number(s.slice(i,j));
      for(let k = 0; k < slice_number; k++){
        result.push(s[j]);
      }
      j = j+1;
      i = j;
    }
  }
  return String(result.join(''));
};
const pairSum = (numbers, targetSum) => {
  // todo
  let object = {};
  // key: target - number
  // value: index
  for(let i = 0; i < numbers.length; i++){
    object[targetSum-numbers[i]] = i;
  }
  for(let i = 0; i < numbers.length; i++){
    if(object[numbers[i]] && object[numbers[i]] !== i) return [i, object[numbers[i]]]
  }
};

// n = length of array
// Time: O(n)
// Space: O(n)
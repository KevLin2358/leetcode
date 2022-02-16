const maxValue = (nums) => {
  // todo
  var max = -Infinity;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > max){
      max = nums[i];
    }
  }
  return max;
};
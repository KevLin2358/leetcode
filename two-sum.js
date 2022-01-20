var arr = [];
var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++){
        for(j = 1; j < nums.length-1; j++){
            if(nums[i] + nums[j] == target){
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr;
};
function twoSum(nums, target) {
    var arr = [];
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                arr.push(i);
                arr.push(j);
            }
            // console.log(nums[i], nums[j])
            // arr.push(nums[i]+nums[j])
        }
    }
    return arr;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

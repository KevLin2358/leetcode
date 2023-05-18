var twoSum = function(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(nums.includes(diff) && nums.indexOf(diff) !== i) return [i, nums.indexOf(diff)];
    }
};

/* 
Runtime
175 ms

Beats
20.86%


Memory
41.9 MB

Beats
90.74%
*/


var twoSum2 = function(nums, target) {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (obj[diff] !== undefined) return [i, obj[diff]]
        else obj[nums[i]] = i

    }
};

/*

Runtime

    64 ms

Beats 80.13%


Memory

    42.6 MB

Beats 56.46%


*/
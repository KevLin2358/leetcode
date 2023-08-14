var removeElement = function(nums, val) {
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
        while(nums[j] === val) {
            j--
            nums.pop()
        }

        if(nums[i] === val) {
            nums[i] = nums[j]
            nums[j] = val
            j--
            nums.pop()
        }
        i++

    }

};

/* 
    Runtime: 59 ms
    Beats: 60.64%

    Memory: 41.8 MB 
    Beats: 71.30%
*/
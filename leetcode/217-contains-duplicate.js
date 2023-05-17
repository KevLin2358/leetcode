var containsDuplicate = function(nums) {
    let nonDupe = new Set(nums)

    return nums.length !== nonDupe.size
};
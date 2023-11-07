var topKFrequent = function(nums, k) {
    let obj = {}

    for (let num of nums) {
        if (obj[num]) obj[num]++;
        else obj[num] = 1;
    }

    let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]).slice(0,k);
    
    return sorted.map(ele => {
        return ele[0];
    })
};
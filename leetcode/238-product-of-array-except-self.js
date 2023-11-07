const productExceptSelfEff = (nums) => {
    let result = [];
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        result.push(product);
        product *= nums[i];
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};


var productExceptSelf = function(nums) {
    let prefix = [];
    let postfix = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if(i === 0) prefix.push(nums[i]); 
        else prefix.push(nums[i] * prefix[prefix.length - 1]);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) postfix[i] = nums[i];
        else postfix[i] = nums[i] * postfix[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) result.push(postfix[1]);
        else if (i === nums.length - 1) result.push(prefix[nums.length - 2]);
        else result.push(prefix[i - 1] * postfix[i + 1]);
    }

    console.log(prefix)
    console.log(postfix)
    
    return result;
};

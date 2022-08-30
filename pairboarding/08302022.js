var intersection = function (nums1, nums2) {
  // hash map
  // result array
  // iterate through one arr and put into the map
  // iterate through other array
  // if map has push it into result
  // return result

  let newNums1 = new Set(nums1);
  let newNums2 = new Set(nums2);
  let result = [];

  newNums1.forEach((num) => {
    if (newNums2.has(num)) {
      result.push(num);
    }
  });

  return result;
};

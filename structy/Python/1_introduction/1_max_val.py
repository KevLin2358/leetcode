def max_value(nums):
  max = nums[0]
  
  for num in nums:
    if max < num:
      max = num
  
  return max
  pass # tod
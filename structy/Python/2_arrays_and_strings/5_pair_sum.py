def pair_sum(numbers, target_sum):
  for index, num in enumerate(numbers):
    diff = target_sum - num
    
    if diff in numbers and numbers.index(diff) != index:
      return (index, numbers.index(diff))
  
  pass # todo
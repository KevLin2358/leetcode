def compress(s):
  res = ''
  count = 0
  curr_char = s[0]
  
  for char in s:
    if curr_char == char:
      count = count + 1
    else:
      if count == 1:
        res += curr_char
      else:
        res += str(count) + curr_char
        
      curr_char = char
      count = 1
        
  if count == 1: 
    res += curr_char
  else:
    res += str(count) + curr_char 
    
  return res

  pass # todo
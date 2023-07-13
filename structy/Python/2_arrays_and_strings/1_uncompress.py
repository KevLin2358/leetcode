def uncompress(s):
  num = '1234567890'
  cur_num = ''
  res = ''
  
  for char in s:
    if char in num:
      cur_num += char
    else:
      res += char * int(cur_num)
      cur_num = ''
  
  return res

  pass # todo
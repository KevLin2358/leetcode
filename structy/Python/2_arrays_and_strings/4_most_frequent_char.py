def most_frequent_char(s):
  characters = populate(s)
  res = None
  
  for char in characters:
    if res is None or characters[char] > characters[res]:
      res = char
  
  return res
  
  pass

def populate(word):
  dict = {}
  
  for char in word:
    if char not in dict:
      dict[char] = 0
    dict[char] += 1
    
  return dict
  pass

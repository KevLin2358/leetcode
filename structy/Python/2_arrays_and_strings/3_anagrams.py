def anagrams(s1, s2):
  return populate(s1) == populate(s2)
  pass # todo


def populate(word):
  dict = {}
  
  for char in word:
    if char not in dict:
      dict[char] = 0
    dict[char] += 1
  
  return dict
  pass
  
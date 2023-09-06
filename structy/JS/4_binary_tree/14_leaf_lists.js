const leafList = (root) => {
  if (!root) return []
  
  let stack = [ root ]
  let result = []
  
  while (stack.length > 0) {
    let current = stack.pop()
    
    if (!current.left && !current.right) {
      result.push(current.val)
      continue
    }
    
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  
  return result
};
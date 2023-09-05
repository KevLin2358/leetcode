// iterative
const treeLevels = (root) => {
  // todo
  if (!root) return []
  let result = []
  let stack = [ [root] ]
  
  while (stack.length > 0) {
    let current = stack.pop()
    if (current.length === 0) break
    
    let level = []
    let vals = []
    
    current.forEach(node => {
      vals.push(node.val)
      if (node.left) level.push(node.left)
      if (node.right) level.push(node.right)
    })
    
    stack.push(level)
    result.push(vals)
  }
  
  return result
};
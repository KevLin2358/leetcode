const levelAverages = (root) => {
  if (!root) return []
  
  let stack = [ [root] ]
  let averages = []
  
  while (stack.length > 0) {
    let current = stack.pop()
    let sum = 0
    let level = []
    
    current.forEach(node => {
      sum += node.val
      if (node.left) level.push(node.left)
      if (node.right) level.push(node.right)
    })
    
    averages.push(sum/current.length)
    if (level.length === 0) break
    stack.push(level)
  }
  
  return averages
};
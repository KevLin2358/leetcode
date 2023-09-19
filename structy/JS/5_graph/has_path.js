const hasPath = (graph, src, dst) => {
  // todo
  let stack = [ src ]
  
  while (stack.length > 0) {
    let current = stack.pop()
    let val = graph[current]
    
    if (val.includes(dst)) {
      return true
    }
    
    val.forEach(ele => {
      stack.push(ele)
    })
  }
  
  return false
};
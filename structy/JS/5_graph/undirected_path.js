const undirectedPath = (edges, nodeA, nodeB) => {
  let graphs = {}
  
  // populate graph 
  edges.forEach(edge => {
    graphs[edge[0]] = graphs[edge[0]] ? [...graphs[edge[0]], edge[1] ] : [ edge[1] ]
    graphs[edge[1]] = graphs[edge[1]] ? [...graphs[edge[1]], edge[0] ] : [ edge[0] ]
  })
  
  let stack = [ nodeA ]
  let visited = [ nodeA ]
  
  while (stack.length > 0) {
    let current = stack.pop()    
    let paths = graphs[current]
    
    visited.push(current)
    
    if (paths.includes(nodeB)) {
      return true
    }
    
    paths.forEach(node => {
      // cycle prevention
      if (!visited.includes(node)) {
        stack.push(node)
      }
    })
  }
  
  return false
};
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
/*
time complexity: 
  O(e) where e is the number of edges 
  or 
  O(n^2) 
  where n is the number of nodes and each edge is a connection between two nodes 
  hence the ^2

space complexity: 
  O(n) where n is the number of nodes
  
has_path revisited
iterative with stack + visited
const hasPath = (graph, src, dst) => {
  let visited = []
  let stack = [ src ]
  
  while (stack.length > 0) {
    let current = stack.pop()
    let paths = graph[current]
    
    for (let path of paths) {
      if (path === dst) return true
      
      if (!visited.includes(path)) { // don't need this really since this is acyclic
        visited.push(path)
        stack.push(path)
      }
    }
  }
  
  return false
};

recursive depth first  
- it bottoms out one path before heading to the next path
  
const hasPath = (graph, src, dst) => {
  if (src === dst) return true
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true
  }
  
  return false
};

iterative breadth first
const hasPath = (graph, src, dst) => {
  let queue = [ src ]
  
  while (queue.length > 0) {
    let current = queue.shift()
    
    if (current === dst) return true
    
    graph[current].forEach(path => {
      queue.push(path)
    })
  }
  
  return false
};
*/
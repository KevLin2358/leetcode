// cleaner solution
const undirectedPath = (edges, nodeA, nodeB) => {
  let graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set())
}

const buildGraph = edges => {
  let graph = {};
  
  for (let edge of edges) {
    let [a, b] = edge;
    
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src)
  
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }
  
  return false
}



// revisted 
/*
const undirectedPath2 = (edges, nodeA, nodeB) => {
  let paths = {};
  
  for (let edge of edges) {
    let point1 = edge[0];
    let point2 = edge[1];
    
    if (paths[point1] === undefined) paths[point1] = [];
    if (paths[point2] === undefined) paths[point2] = [];
    
    if (!paths[point1].includes(point2)) paths[point1].push(point2);
    if (!paths[point2].includes(point1)) paths[point2].push(point1);
  }
  
  let visited = [];
  let stack = [ nodeA ];
  
  while (stack.length > 0) {
    let current = stack.pop();
    
    if (visited.includes(current)) continue;
    else visited.push(current)
    
    if (paths[current].includes(nodeB)) return true
    
    for (let path of paths[current]) {
      stack.push(path)
    }
  }
  
  return false
}
*/
/*
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


*/
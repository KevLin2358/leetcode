const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0;

    for (let path in graph) {
        if (traverse(graph, path, visited)) count += 1;
    }

    return count;
}

const traverse = (graph, current, visited)  => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    for (let neighbor of graph[current]) {
        traverse(graph, neighbor, visited);
    }

    return true;
}

/*
const connectedComponentsCount = (graph) => {
  // todo
  let visited = [];
  let count = 0;
  
  for (let path in graph) {
    let stack = [path];
    
    if (visited.includes(Number(path))) continue;
    visited.push(Number(path));
    
    while (stack.length > 0) {
      let current = stack.pop(); // 0
      let paths = graph[current]; // [8, 1, 5]
      
      paths.forEach(ele => {
        if(!visited.includes(ele)) {
          stack.push(ele);
          visited.push(ele);
        }
      })
    }
    console.log(visited)
    count++;
  }
  
  return count;
};

// Time complexity: O(e) where e is the number of edges
// Space complexity: O(n) where e is the number of nodes
*/

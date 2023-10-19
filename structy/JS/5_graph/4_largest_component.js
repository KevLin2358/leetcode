const largestComponent = (graph) => {
  // todo
  const visited = new Set();
  let max = 0;
  
  for (let node in graph) {
    let count = travelCount(graph, node, visited);
    if (max < count) max = count;
  }
  
  return max;
};

const travelCount = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  
  let count = 1;
  
  for (let neighbor of graph[node]) {
    count += travelCount(graph, neighbor, visited);
  }
    
  return count;
}


// const largestComponent = (graph) => {
//   // todo
//   let maxCount = 0;
  
//   for (let neighbor in graph) {
//     let count = countPath(graph,neighbor);
//     if (maxCount < count) maxCount = count;
//   }
  
//   return maxCount;
// };

// const countPath = (graph, neighbor) => {
//     let stack = [neighbor];
//     let currCount = 0;
//     let visited = [];
  
//     while(stack.length > 0) {
//       // console.log(`stack: ${stack}`)
      
//       let current = stack.pop();
      
//       if (visited.includes(current)) continue;
//       visited.push(current);
      
//       currCount++;
//       // console.log(`visited: ${visited}`)
//       // console.log(`graph[current]: ${graph[current]}`)
      
//       graph[current].forEach(ele => {
//         if (!visited.includes(ele)) stack.push(ele);
//       })
      
//       // console.log(`stack after for loop: ${stack}`)
//       // console.log(`count: ${currCount}`)
//     }

//     return currCount;
  
// }
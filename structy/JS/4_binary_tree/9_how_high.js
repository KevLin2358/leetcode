// review 

const howHighRecursive = (node) => {
  // todo
  if (!node) return -1
  
  let left = howHigh(node.left)
  let right = howHigh(node.right)
  
  return 1 + Math.max(left, right)
};

const howHigh = (node) => {
  // todo
  if (!node) return -1
  
  let stack = [ [node] ]
  let count = 0
  
  while (stack.length > 0) {
    let layer = []
    let currArr = stack.pop()
    
    currArr.forEach( node => {
      if (node.right) layer.push(node.right)
      if (node.left) layer.push(node.left)
    })
    
    if (layer.length === 0) break
    
    stack.push(layer)
    count++
  }
  
  return count
};

// // iterative

// const howHighIterative = (node) => {
//   // base case
//   if (!node) return -1
//   if (!node.left && !node.right) return 0
  
//   let count = 0
//   let stack = [ [node] ]
//   let flag = true
  
//   while (flag) {
//     let curr = stack.pop()    
//     let arr = []
    
//     for (let i = 0; i < curr.length; i++) {
//       let currNode = curr[i]
//       if (currNode.left) arr.push(currNode.left)
//       if (currNode.right) arr.push(currNode.right)
//     }
    
//     flag = arr.some((currNode) => {
//       if (!currNode.left && !currNode.right) return false
//       return true
//     })
  
//     count++
//     stack.push(arr)
//   }
  
//   return count
// };


// const howHigh = (node) => {
//   // base case
//   if (!node) return -1

//   const leftSide = howHigh(node.left)
//   const rightSide = howHigh(node.right)
  
//   return 1 + Math.max(leftSide, rightSide)
// }
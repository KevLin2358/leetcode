// iterative

const howHighIterative = (node) => {
  // base case
  if (!node) return -1
  if (!node.left && !node.right) return 0
  
  let count = 0
  let stack = [ [node] ]
  let flag = true
  
  while (flag) {
    let curr = stack.pop()    
    let arr = []
    
    for (let i = 0; i < curr.length; i++) {
      let currNode = curr[i]
      if (currNode.left) arr.push(currNode.left)
      if (currNode.right) arr.push(currNode.right)
    }
    
    flag = arr.some((currNode) => {
      if (!currNode.left && !currNode.right) return false
      return true
    })
  
    count++
    stack.push(arr)
  }
  
  return count
};


const howHigh = (node) => {
  // base case
  if (!node) return -1

  const leftSide = howHigh(node.left)
  const rightSide = howHigh(node.right)
  
  return 1 + Math.max(leftSide, rightSide)
}
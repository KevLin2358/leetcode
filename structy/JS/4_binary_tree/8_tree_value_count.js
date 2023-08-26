// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes

// recursion

const treeValueCountRecursive = (root, target) => {
  // todo
  if (!root) return 0
  let count = root.val === target ? 1 : 0
  return count + treeValueCount(root.left, target) + treeValueCount(root.right, target)
};

// review
const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0
  
  let count = 0
  let stack = [root]
  
  while (stack.length > 0) {
    let currNode = stack.pop()
    if (currNode.val === target) count++
    
    if(currNode.right) stack.push(currNode.right)
    if (currNode.left) stack.push(currNode.left)
  }
  
  return count
};

// const treeValueCount = (root, target) => {
//   // todo
//   if (!root) return 0

//   let count = 0
//   let stack = [ root ]

//   while (stack.length > 0) {
//     let current = stack.pop()

//     if (current.val === target) count++
    
//     if (current.right) stack.push(current.right)
//     if (current.left) stack.push(current.left)
//   }

//   return count
// };
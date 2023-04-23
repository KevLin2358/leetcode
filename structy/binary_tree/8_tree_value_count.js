// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes


const treeValueCount = (root, target) => {
  // todo
  if (!root) return 0

  let count = 0
  let stack = [ root ]

  while (stack.length > 0) {
    let current = stack.pop()

    if (current.val === target) count++
    
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return count
};
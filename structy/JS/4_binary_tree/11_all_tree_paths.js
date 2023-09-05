const allTreePaths = (root) => {
  // todo
  if (!root) return []
  if (!root.left && !root.right) return [ [root.val] ]
  
  let paths = []  
  let left = allTreePaths(root.left)
  let right = allTreePaths(root.right)
  
  left.forEach(subPaths => {
    paths.push([root.val, ...subPaths])
  })
  
  right.forEach(subPaths => {
    paths.push([root.val, ...subPaths])
  })
  
  return paths
};
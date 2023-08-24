// depth first
// time conplexity : O(n^2)
// space complexity : O(n)

const pathFinder = (root, target) => {
  // todo
  if (!root) return null
  if (root.val === target) return [ target ]
  
  let leftSide = pathFinder(root.left, target)
  let rightSide = pathFinder(root.right, target)
  
  if (leftSide) {
    // return [root.val, ...leftSide] // way slower
    return [root.val].concat(leftSide)
  }
  
  if (rightSide) {
    // return [root.val, ...rightSide] // way slower
    return [root.val].concat(rightSide)
  }
  
  return null
};
// const pathFinder = (root, target) => {
//   // base case
//   if (!root) return null
//   if (root.val === target) return [root.val]
  
//   // two paths
//   const leftPath = pathFinder(root.left, target)
//   const rightPath = pathFinder(root.right, target)
  
//   // either left, right or not found
//   if(leftPath) return [root.val, ...leftPath]
//   if(rightPath) return [root.val, ...rightPath]
//   return null
// };


// // depth first w/ push
// // time conplexity : O(n)
// // space complexity : O(n)
// const pathFinderPush = (root, target) => {
//   const res = pathFinderHelper(root, target)
//   if (!res) return null
//   return res.reverse()
// }

// const pathFinderHelper = (root, target) => {
//   // base case
//   if (root === null) return null
//   if (root.val === target) return [ root.val ]

//   // two paths
//   const leftPath = pathFinderHelper(root.left, target)
//   const rightPath = pathFinderHelper(root.right, target)

//   // left, right will use push
//   if (leftPath) {
//     leftPath.push(root.val)
//     return leftPath
//   }

//   if (rightPath) {
//     rightPath.push(root.val)
//     return rightPath
//   }
  
//   // nothing return null
//   return null
// }
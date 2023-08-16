// time complexity: O(n) 
// space complexity: O(n)
// where n is the number of nodes in the binary tree

// iteratively 
const depthFirstValues = (root) => {
  // todo
  if (!root) return []
  
  let stack = [root]
  let values = []
  
  while(stack.length > 0) {
    let curr = stack.pop()
    
    values.push(curr.val)
    
    if (curr.right) stack.push(curr.right)    
    if (curr.left) stack.push(curr.left)
  }
  
  return values  
};

// //iteratively
// const depthFirstValues = (root) => {
//   // todo
//   if(root === null) return [];
  
//   let stack = [ root ];
//   let result = [];
  
//   while(stack.length > 0){
//     let current = stack.pop();
//     result.push(current.val);
    
//     if(current.right !== null) stack.push(current.right)
//     if(current.left !== null) stack.push(current.left);
//   }
  
//   return result;
// };


//recursively
// const depthFirstValues2 = (root) => {
//   // todo
//   if(root === null) return [];
  
//   let leftSide = depthFirstValues(root.left);
//   let rightSide = depthFirstValues(root.right);
  
//   return [root.val, ...leftSide, ...rightSide];
// };
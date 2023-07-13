// iteratively
// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes in the binary tree

const treeIncludes = (root, target) => {
  // todo
  if(!root) return false;
  
  let stack = [root];
  
  while(stack.length > 0){
    const current = stack.pop();
    if(current.val === target) return true;
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  
  return false;
};
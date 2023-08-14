// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes in the binary tree

const treeMinValue = (root) => {
  // todo
  
  let min = Infinity;
  let stack = [root];
  
  while(stack.length > 0){
    const current = stack.pop();
    if(min > current.val) min = current.val;
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  return min;
};
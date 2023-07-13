// iteratively
// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes in the binary tree
const treeSum = (root) => {
  // todo
  
  if(!root) return 0;
  
  let sum = 0;
  let stack = [root];
  
  while(stack.length > 0){
    const current = stack.pop();
    sum += current.val;
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  
  return sum;
};

//recursively

const treeSumRec = (root) => {
  // todo
  if(root === null) return 0;
  let leftside = treeSum(root.left);
  let rightside = treeSum(root.right);
  return root.val + leftside + rightside;
};
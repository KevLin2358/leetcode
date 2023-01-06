// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes


const treeValueCount = (root, target) => {
  // todo
  if(!root) return 0;
  
  let stack = [ root ];
  let count = 0;
  
  while(stack.length > 0){
    const element = stack.pop();
    if(element.val === target) count++;
    if(element.right) stack.push(element.right);
    if(element.left) stack.push(element.left);
  }
  
  return count;
};
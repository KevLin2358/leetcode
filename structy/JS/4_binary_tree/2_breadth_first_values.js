// time compleity: O(n^2) because of the shift
// space complexity: O(n)
// where n is the number of nodes in the binary tree

const breadthFirstValues = (root) => {
  if(root === null) return [];
  
  // todo
  let result = [];
  let queue = [root];
  
  while(queue.length > 0){
    const current = queue.shift();
    result.push(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  
  return result;
};
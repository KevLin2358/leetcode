// recurssively 
// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes in the binary tree

const maxPathSum = (root) => {
  // todo
  if(!root) return -Infinity;
  if(root.left === null && root.right === null) return root.val;

  let leftside = maxPathSum(root.left);
  let rightside = maxPathSum(root.right);

  return root.val + Math.max(leftside, rightside);
};

var invertTree = function (root) {
  if (!root) return null;

  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    const left = current.left;
    const right = current.right;
    current.left = right;
    current.right = left;
  }

  return root;
};

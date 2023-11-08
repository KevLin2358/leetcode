var findDuplicateSubtrees = function(root) {
  let serialized = {};
  let dupe = [];
  
  const dfs = (root) => {
    if (!root) return 'null';

    let serial = `${root.val}, ${dfs(root.left)}, ${dfs(root.right)}`;

    if(serialized[serial] === 1) dupe.push(root);

    if(!serialized[serial]) serialized[serial] = 0;
    serialized[serial]++;

    return serial;
  }

  dfs(root);
  return dupe;
}
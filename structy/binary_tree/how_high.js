const howHigh = (node) => {
  // todo
  if (node === null) return -1;
  return Math.max(howHigh(node.left), howHigh(node.right)) + 1;
};

// recursively
const linkedListFindRe = (head, target) => {
  // todo
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFindRe(head.next, target);
};

// iteratively
const linkedListFindIt = (head, target) => {
  // todo
  if (head === null) return false;
  let current = head;
  while (current) {
    if (current.val === target) return true;
    else current = current.next;
  }
  return false;
};

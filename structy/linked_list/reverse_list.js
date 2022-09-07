// iteratively
const reverseList = (head) => {
  // todo
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

//recursively
const reverseListRe = (head, prev = null) => {
  // todo
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  prev = head;
  return reverseList(next, prev);
};

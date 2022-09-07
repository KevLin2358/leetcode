// iteratively

const getNodeValue = (head, index) => {
  // todo
  if (!head) return null;

  let current = head;
  let counter = 0;

  while (current) {
    if (index === counter) return current.val;
    current = current.next;
    counter++;
  }

  return null;
};

// recursively
const getNodeValueRe = (head, index) => {
  // todo
  if (!head) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};

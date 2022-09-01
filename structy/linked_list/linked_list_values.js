const linkedListValues = (head) => {
  if (head === null) return [];
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

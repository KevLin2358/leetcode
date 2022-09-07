// iteratively
const zipperLists = (head1, head2) => {
  // todo
  let list1 = head1.next;
  let list2 = head2;
  let start = head1;
  let counter = 0;

  while (list1 && list2) {
    if (counter % 2 === 0) {
      start.next = list2;
      list2 = list2.next;
    } else {
      start.next = list1;
      list1 = list1.next;
    }
    counter++;
    start = start.next;
  }

  if (list1) start.next = list1;
  if (list2) start.next = list2;
  return head1;
};

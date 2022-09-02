var mergeTwoLists = function (list1, list2) {
  if (list1 === 0 && list2 === 0) return [];

  let dummy = new ListNode(0, null);
  let head = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 && current2) {
    if (current1.val <= current2.val) {
      dummy.next = current1;

      current1 = current1.next;
    } else {
      dummy.next = current2;
      current2 = current2.next;
    }
    dummy = dummy.next;
  }
  if (current1 !== null) dummy.next = current1;
  if (current2 !== null) dummy.next = current2;
  return head.next;
};

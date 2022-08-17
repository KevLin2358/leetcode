var deleteDuplicates = function (head) {
  // time complexity: O(n)
  // space complextiy: O(1)

  // edge case: if head is null return null

  // we have 2 pointers one is head and the other is for next

  // while(head.next !== null)
  // 2 cases:
  // if head.val !== next.val
  // continue with head = next , next = node.next
  // if head.val === next.val
  //head.next = next.next
  // return head

  // input : [1,1,2,3,3]
  // output : [1,2,3]
  // current : 3
  // current.next : null
  // after : null
  // list: [1, 2, 3]

  if (head === null) return head;

  let current = head;
  let after = head.next;

  while (current.next) {
    if (current.val !== after.val) {
      current = after;
      after = after.next;
    } else {
      current.next = after.next;
      after = after.next;
    }
  }

  return head;
};

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]
// Current : 3
// Next: 4
// Current.next = next.next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("1");
const b = new Node("2");
const c = new Node("3");
const d = new Node("4");
const e = new Node("5");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function removeFromBack(node, n) {
  if (node === null) return null;

  let head1 = node;
  let total = 0;

  while (head1 !== null) {
    total++;
    head1 = head1.next;
  }

  let nPlace = total - n;
  if (nPlace === total) return node.next;

  let head2 = node;
  for (let i = 1; i < nPlace; i++) {
    head2 = head2.next;
  }
  head2.next = head2.next.next;

  let head3 = node;
  while (head3 !== null) {
    console.log(head3);
    head3 = head3.next;
  }
  return node;
}

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// [1,2,3,4,5]
//      P1
//          p2

function removeFromBack(node, n) {}

console.log(removeFromBack(a, 2));

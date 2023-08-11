// const createLinkedList = (values) => {
//   // todo
//   if(values.length === 0) return null;
  
//   const head = new Node(values[0]);
//   let current = head;
  
//   for(let i = 1; i < values.length; i++){
//     const newNode = new Node(values[i]);
//     current.next = newNode;
//     current = current.next;
//   }
//   return head;
// };

// Aug 11, 2023  (<1 min)
const createLinkedList = (values) => {
  // todo
  let head = new Node(0)
  let head1 = head
  
  values.forEach(val => {
    let node = new Node(val)
    head1.next = node
    head1 = head1.next
  })
  
  return head.next
};
// const insertNode = (head, value, index) => {
//   // todo
//   if(index === 0){
//     const newNode = new Node(value);
//     newNode.next = head;
//     return newNode;
//   }
  
//   let count = 1;
//   let current = head;
//   let next = head.next;
  
//   while(current){
//     if(count === index){
//       const newNode = new Node(value);
//       current.next = newNode;
//       newNode.next = next;
//       return head;
//     }
//     count++;
//     current = next;
//     next = next.next;
//   }
// };

// Aug 11, 2023 - review  3 Min
const insertNode = (head, value, index) => {
  // todo
  let node = new Node(value)
  
  if (index === 0) {
    node.next = head
    return node
  }
  
  let head1 = head
  let count = 0
  
  while (head1) {
    let next = head1.next
    
    if (count === index - 1) {
      head1.next = node
      node.next = next
      return head
    }
    
    count++
    head1 = head1.next
  }
};
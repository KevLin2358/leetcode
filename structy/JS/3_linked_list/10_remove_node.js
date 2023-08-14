// const removeNode = (head, targetVal) => {
//   // todo
//   // case if head is targetVal
//   if(head.val === targetVal) return head.next;
  
//   let prev = head;
//   let current = head.next;
  
//   while(current){
//     if(current.val === targetVal){
//       prev.next = current.next
//       return head;
//     };
//     prev = current;
//     current = current.next;
//   }
// };

// Aug 10 review
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next
  
  let head1 = head
  
  while (head1) {
    let next = head1.next
    let nextNext = next.next
    
    if (next.val === targetVal) {
      head1.next = nextNext
      return head
    } 
    
    head1 = next
  }
  
  return head
};
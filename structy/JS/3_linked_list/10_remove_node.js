const removeNode = (head, targetVal) => {
  // todo
  // case if head is targetVal
  if(head.val === targetVal) return head.next;
  
  let prev = head;
  let current = head.next;
  
  while(current){
    if(current.val === targetVal){
      prev.next = current.next
      return head;
    };
    prev = current;
    current = current.next;
  }
};
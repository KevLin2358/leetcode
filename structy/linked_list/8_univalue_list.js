const isUnivalueList = (head) => {
  // todo
  let current = head;
  while(current){
    if(current.next !== null && current.val !== current.next.val) return false;
    current = current.next;
  }
  
  return true;
};
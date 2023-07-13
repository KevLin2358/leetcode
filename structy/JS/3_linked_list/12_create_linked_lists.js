const createLinkedList = (values) => {
  // todo
  if(values.length === 0) return null;
  
  const head = new Node(values[0]);
  let current = head;
  
  for(let i = 1; i < values.length; i++){
    const newNode = new Node(values[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};
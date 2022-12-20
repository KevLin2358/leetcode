const insertNode = (head, value, index) => {
  // todo
  if(index === 0){
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }
  
  let count = 1;
  let current = head;
  let next = head.next;
  
  while(current){
    if(count === index){
      const newNode = new Node(value);
      current.next = newNode;
      newNode.next = next;
      return head;
    }
    count++;
    current = next;
    next = next.next;
  }
};
const addLists = (head1, head2) => {
  // todo
  let dummyhead = new Node(null);
  let tail = dummyhead;
  
  let carry = 0;
  let list1 = head1;
  let list2 = head2;
  
  while(list1 || list2){
    let val1 = !list1 ? 0 : list1.val;
    let val2 = !list2 ? 0 : list2.val;
    
    let sum = val1 + val2 + carry;
    carry = 0;
    
    if(sum > 9){
      carry = 1;
      sum = sum - 10;
    }
    
    tail.next = new Node(sum);
    tail = tail.next;
    if(list1) list1 = list1.next;
    if(list2) list2 = list2.next;
    
    if((!list1 && !list2) && carry === 1)tail.next = new Node(carry);
  }
  
  return dummyhead.next;
};



/*
const addLists = (head1, head2) => {
  // todo
  let dummyhead = new Node(null);
  let tail = dummyhead;
  
  let carry = 0;
  let list1 = head1;
  let list2 = head2;
  
  while(list1 || list2){
    let val1 = !list1 ? 0 : list1.val;
    let val2 = !list2 ? 0 : list2.val;
    
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    sum = sum > 9 ? sum - 10 : sum;
    
    tail.next = new Node(sum);
    tail = tail.next;
    if(list1) list1 = list1.next;
    if(list2) list2 = list2.next;
    
    if((!list1 && !list2) && carry === 1)tail.next = new Node(carry);
  }
  
  return dummyhead.next;
};


*/
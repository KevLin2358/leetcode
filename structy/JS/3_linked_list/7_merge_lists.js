class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  // todo
  let dummyhead = new Node(); 
  let tail = dummyhead;
  let current1 = head1;
  let current2 = head2;
  
  while(current1 && current2){
    if(current1.val <= current2.val){
      tail.next = current1;
      current1 = current1.next;
    }else{
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  
  if(current1) tail.next = current1;
  if(current2) tail.next = current2;
  
  return dummyhead.next;
};
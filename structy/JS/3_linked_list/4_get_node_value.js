// iteratively

const getNodeValue = (head, index) => {
  // todo
  if (!head) return null;

  let current = head;
  let counter = 0;

  while (current) {
    if (index === counter) return current.val;
    current = current.next;
    counter++;
  }

  return null;
};

// recursively
const getNodeValueRe = (head, index) => {
  // todo
  if (!head) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};


// const getNodeValue = (head, index) => {
//   // todo
//   // base case head = null
  
//   let count = 0;
//   let current = head;
  
//   while(current){
//     if(count === index)return current.val;
//     current = current.next;
//     count++;
//   }
  
//   return null;
// };
// const getNodeValue = (head, index) => {
//   // todo
//   // base case head = null
//   if(index === 0) return head.val;
//   if(index < 0 || head === null ) return null;
//   index-=1
//   return getNodeValue(head.next, index);
// };

// const reverseList = (head) => {
//   // todo
//   let prev = null;
//   let current = head;
  
//   while(current){
//     const next = current.next;
//     current.next = prev;
    
//     prev = current;
//     current = next;
//   }
//   return prev;
// };


// const reverseList = (head, prev = null) => {
//   if(!head) return prev;
//   const next = head.next;
//   head.next = prev;
//   prev = head;

//   return reverseList(next, prev)
// }
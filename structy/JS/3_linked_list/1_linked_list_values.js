const linkedListValues = (head) => {
  if (head === null) return [];
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};


// const linkedListValues = (head) => {
//   // todo
//   // base case
//   if(!head) return [];
  
//   let result = [head.val];
//   let current = head.next;
  
//   while(current){
//     result.push(current.val);
//     current = current.next;
//   }
//   return result;
// };
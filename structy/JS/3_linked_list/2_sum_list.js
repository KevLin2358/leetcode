const sumList = (head) => {
  //to do
  //base case
  if (!head) return 0;

  let sum = 0;

  while (head) {
    sum += head.val;
    head = head.next;
  }

  return sum;
};



// const sumList = (head) => {
//   // todo
  
//   if(!head)return 0;
  
//   let sum = 0;
//   let current = head;
//   while(current){
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };
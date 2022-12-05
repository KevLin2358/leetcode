const longestStreak = (head) => {
  // todo
  if(!head) return 0;
  
  let streak = 1;
  let maxStreak = streak;
  
  while(head){
    if(head.next !== null && head.val === head.next.val){
      streak++;
    }else{
      if(maxStreak < streak) maxStreak = streak;
      streak = 1;
    }
    head = head.next;
  }
  return maxStreak;
};
// time complexity: O(n)
// space complexity: O(n)
// where n is the number of nodes


const pathFinder = (root, target) => {
  // todo
  const result = pathFinderHelper(root, target);
  if(!result) return null;
  else return result.reverse()
}

const pathFinderHelper = (root, target) =>{
  if(!root) return null;
  if(root.val === target) return [ root.val ];
  
  let leftside = pathFinderHelper(root.left, target);
  if(leftside){
    leftside.push(root.val);
    return leftside;
  }
  
  let rightside = pathFinderHelper(root.right, target);
  if(rightside){
    rightside.push(root.val);
    return rightside;
  }
  
  return null;
}

// time complexity: O(n^2) because of lines 39 & 45 
// space complexity: O(n) 
// where n is the number of nodes
// const pathFinder = (root, target) => {
//     if(!root) return null;
//     if(root.val === target) return [ root.val ];

//     let leftside = pathFinder(root.left, target);
//     if(leftside){
//         leftside = [root.val, ...leftside];
//         return leftside;
//     }

//     let rightside = pathFinder(root.right, target)
//     if(rightside){
//         rightside = [root.val, ...rightside];
//         return rightside;
//     }

//     return null;
// }
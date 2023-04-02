// var isValid = function (s) {
//   let leftSide = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       leftSide.push(s[i]);
//     } else if (
//       s[i] === ")" &&
//       leftSide.length !== 0 &&
//       leftSide[leftSide.length - 1] === "("
//     ) {
//       leftSide.pop();
//     } else if (
//       s[i] === "]" &&
//       leftSide.length !== 0 &&
//       leftSide[leftSide.length - 1] === "["
//     ) {
//       leftSide.pop();
//     } else if (
//       s[i] === "}" &&
//       leftSide.length !== 0 &&
//       leftSide[leftSide.length - 1] === "{"
//     ) {
//       leftSide.pop();
//     } else return false;
//   }

//   if (leftSide.length > 0) return false;

//   return true;
// };

// let stack = [];
// for(let i = 0; i < s.length; i++){
//     if(s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
//     else if(s[i] === ')' && stack.length > 0 && stack[stack.length - 1] === '(') stack.pop();
//     else if(s[i] === ']' && stack.length > 0 && stack[stack.length - 1] === '[') stack.pop();
//     else if(s[i] === '}' && stack.length > 0 && stack[stack.length - 1] === '{') stack.pop();
//     else return false;
// }

// const result = stack.length > 0 ? false : true;
// return result;

var isValid = function(s) {
  let obj = {
      ']' : '[',
      '}' : '{',
      ')' : '(',
  }

  let stack = []
  let i = 0;

  while (i < s.length) {
      let ele = s[i]
      if (ele === '(' || ele ==='{' || ele === '[') stack.push(ele)
      else if (obj[ele] === stack[stack.length - 1]) stack.pop()
      else return false
      i++
  }
  if (stack.length > 0) return false
  return true
};

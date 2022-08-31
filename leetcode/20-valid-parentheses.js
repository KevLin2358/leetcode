var isValid = function (s) {
  let leftSide = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      leftSide.push(s[i]);
    } else if (
      s[i] === ")" &&
      leftSide.length !== 0 &&
      leftSide[leftSide.length - 1] === "("
    ) {
      leftSide.pop();
    } else if (
      s[i] === "]" &&
      leftSide.length !== 0 &&
      leftSide[leftSide.length - 1] === "["
    ) {
      leftSide.pop();
    } else if (
      s[i] === "}" &&
      leftSide.length !== 0 &&
      leftSide[leftSide.length - 1] === "{"
    ) {
      leftSide.pop();
    } else return false;
  }

  if (leftSide.length > 0) return false;

  return true;
};

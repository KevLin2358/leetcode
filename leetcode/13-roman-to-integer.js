var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let strings = s.split("");

  let result = 0;

  for (let i = 0; i < strings.length; i++) {
    console.log(i + " : " + romanValues[strings[i]]);
    if (romanValues[strings[i]] < romanValues[strings[i + 1]]) {
      let sum = romanValues[strings[i + 1]] - romanValues[strings[i]];
      result += sum;
      i++;
    } else {
      result += romanValues[strings[i]];
    }
  }
  return result;
};

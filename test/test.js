const fizzBuzz = (n) =>
  [...Array(n + 1).keys()].map(
    (index) => `${++index % 3 ? "" : "Fizz"}${index % 5 ? "" : "Buzz"}` || index
  );

function test(n) {
  return n % 3 ? "" : "Fizz"; // if n%3 === 0 it means it is false since 0 is a falsy value
}

//console.log(fizzBuzz(15));
console.log(test(3));

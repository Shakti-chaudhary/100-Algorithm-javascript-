// FirstDigit

function firstDigit(inputString) {
  let split_string = inputString.split("");
  for (let i of split_string) {
    if (!isNaN(parseInt(i))) {
      return i;
    }
  }
  return undefined; // If no digit found
}
console.log(firstDigit("var_1__Int")); // 1
console.log(firstDigit("q2q-q")); // 2
console.log(firstDigit("0ss")); // 0

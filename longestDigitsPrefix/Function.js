// Longest Digits Prefix

function longestDigitsPrefix(inputString) {
  const digits = inputString.split("");
  const prefix = [];

  for (let i = 0; i < digits.length; i++) {
    if (!/\d/.test(digits[i])) {
      break;
    }
    prefix.push(digits[i]);
  }

  return prefix.join("");
}

console.log(longestDigitsPrefix("123aa1"));

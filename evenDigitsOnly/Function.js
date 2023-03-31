// Function for evenDigitsOnly(n)

function evenDigitsOnly(digit) {
  digit = digit.split("");
  return digit.every((digit) => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly("248622"));
console.log(evenDigitsOnly("248322"));

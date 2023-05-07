// IntegerToStringOfFixedWidth

function integerToStringOfFixedWidth(number, width) {
  const numberString = number.toString();

  if (numberString.length === width) {
    return numberString;
  }

  if (numberString.length > width) {
    return numberString.substring(numberString.length - width);
  }

  const zerosToAdd = width - numberString.length;
  return "0".repeat(zerosToAdd) + numberString;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

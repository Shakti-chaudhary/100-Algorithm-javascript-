// newNumeralSystem

function newNumeralSystem(number) {
  // Convert letter to decimal value
  const decimalValue = number.charCodeAt() - 65;
  decimalValue;
  // Initialize result array
  const result = [];

  // Loop through all possible pairs of numbers
  for (let i = 0; i <= decimalValue / 2; i++) {
    const j = decimalValue - i;
    const letter1 = String.fromCharCode(i + 65);
    const letter2 = String.fromCharCode(j + 65);
    result.push(`${letter1} + ${letter2}`);
  }

  // Return result array
  return result;
}

console.log(newNumeralSystem("H"));

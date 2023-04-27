// HousingNumbersSum

function houseNumbersSum(inputArray) {
  let sum = 0;
  for (let houseNumber of inputArray) {
    if (houseNumber === 0) {
      break; // stop adding house numbers if 0 is encountered
    } else {
      sum += houseNumber;
    }
  }
  return sum;
}
console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); // 11

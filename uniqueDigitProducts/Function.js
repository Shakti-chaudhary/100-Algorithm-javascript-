// uniqueDigitProducts
function uniqueDigitProducts(numbers) {
  let uniqueProducts = new Set();
  for (let number of numbers) {
    uniqueProducts.add(getDigitProduct(number));
  }
  return uniqueProducts.size;
}

function getDigitProduct(number) {
  let product = 1;
  while (number > 0) {
    product *= number % 10;
    number = Math.floor(number / 10);
  }
  return product;
}

console.log(uniqueDigitProducts([2, 222])); // 2
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23])); // 3

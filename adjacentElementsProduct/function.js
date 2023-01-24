function adjacentElementsProduct(value) {
  let product = value[0] * value[1];

  for (let i = 1; i < value.length - 1; i++) {
    let ans = value[i] * value[i + 1];

    if (product < ans) {
      product = ans;
    }
  }

  return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

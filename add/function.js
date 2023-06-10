function add(numOne, numTwo = 0) {
  return numOne + numTwo;
}

function addTwo(...values) {
  let sum = 0;
  values.forEach((val) => {
    sum += val;
  });
  return sum;
}

console.log(add(2));
console.log(add(2, 6));
console.log(addTwo(2, 4, 5, 6));

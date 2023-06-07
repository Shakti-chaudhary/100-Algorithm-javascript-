// shapeArea

function calculateShapeArea(n) {
  const firstTerm = n - 1 + (n - 2);
  const secondTerm = n + 1;
  // return n*n + (n-1)*(n-1);
  return firstTerm * n + secondTerm;
}

console.log(calculateShapeArea(2)); // 5
console.log(calculateShapeArea(3)); // 13
console.log(calculateShapeArea(4)); // 25

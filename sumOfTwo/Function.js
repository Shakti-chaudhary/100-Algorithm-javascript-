// sumOfTwo

function sumOfTwo(a, b, v) {
  const complements = {};
  for (const num of a) {
    const complement = v - num;
    complements[complement] = true;
  }
  for (const num of b) {
    if (complements.hasOwnProperty(num)) {
      return true;
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));

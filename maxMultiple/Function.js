//  maxMultiple

// N = divisor * Math.floor(bound / divisor)

function maxMultiple(divisor, bound) {
  return divisor * Math.floor(bound / divisor);
}

console.log(maxMultiple(3, 10)); // 9

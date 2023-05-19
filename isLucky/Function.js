// IsLucky

function isLucky(n) {
  const digits = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  const half = digits.length / 2;
  const firstHalf = digits.slice(0, half).reduce((a, b) => a + b);
  const secondHalf = digits.slice(half).reduce((a, b) => a + b);
  return firstHalf === secondHalf;
}

console.log(isLucky(1230));
console.log(isLucky(239017));

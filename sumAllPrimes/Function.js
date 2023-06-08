// sumAllPrimes

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function sumAllPrimes(limit) {
  let sum = 0;
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      sum += number;
    }
  }
  return sum;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));

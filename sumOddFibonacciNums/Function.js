// sumOddFunction

function sumOddFibonacciNums(num) {
  let curr = 1;
  let prev = 1;
  let sum = curr + prev;

  for (let i = 1; i < num; i++) {
    let next = curr + prev;

    if (next % 2 !== 0) {
      sum += next;
    }

    prev = curr;
    curr = next;
    i = next;
  }

  return sum - curr;
}

// example usage:
console.log(sumOddFibonacciNums(10)); // should print 10
console.log(sumOddFibonacciNums(1000)); // should print 1785
console.log(sumOddFibonacciNums(4000000)); // should print 4613732

// squareDigitsSequence

function squareDigitsSequence(a0) {
  let sequence = [a0];
  while (true) {
    let next = sumOfSquaredDigits(sequence[sequence.length - 1]);
    if (sequence.includes(next)) {
      return sequence.length + 1;
    }
    sequence.push(next);
  }
}

function sumOfSquaredDigits(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((sum, x) => sum + x * x, 0);
}

console.log(squareDigitsSequence(16)); // 9
console.log(squareDigitsSequence(103)); // 4

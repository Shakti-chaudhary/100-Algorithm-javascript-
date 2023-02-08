function almostIncreasingSequence(sequence) {
  let ct = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      ct++;

      if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }

  return ct <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 6, 7]));
console.log(almostIncreasingSequence([1, 2, 1, 2]));
console.log(almostIncreasingSequence([1, 2, 4, 3, 5, 6, 2]));

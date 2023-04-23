// Fermactor

function fermactor(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const a = i ** 2 - j ** 2;
      if (a === n) {
        return [i, j];
      }
    }
  }
  return [null, null];
}
console.log(fermactor(15));

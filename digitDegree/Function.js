function digitDegree(n) {
  let degree = 0;

  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }

    n = sum;
    degree++;
  }

  // Return the degree
  return degree;
}
console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));

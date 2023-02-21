function candies(n, m) {
  const candy = Math.floor(m / n);
  return candy * n;
}
console.log(candies(3, 10));

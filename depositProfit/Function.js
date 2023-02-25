function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let account = deposit;

  while (account < threshold) {
    account += (account * rate) / 100;
    year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));

// minimalNumberOfCoins

function minimalNumberOfCoins(coins, amount) {
  let coinCount = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (coins[i] <= amount) {
      coinCount += Math.floor(amount / coins[i]);

      amount %= coins[i];
    }
  }
  return coinCount;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));

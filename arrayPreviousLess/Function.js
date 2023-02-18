function arrayPreviousLess(items) {
  let ans = [];

  for (let i = items.length - 1; i >= 0; i--) {
    let j = i;
    while (j >= 0) {
      if (items[j] < items[i]) {
        ans.unshift(items[j]);
        break;
      } else if (j === 0) {
        ans.unshift(-1);
      }
      j--;
    }
  }
  return ans;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

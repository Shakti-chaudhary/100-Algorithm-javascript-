function allLongestStrings(value) {
  let length = 0;
  let ans = [];
  for (let itr of value) {
    length = itr.length > length ? itr.length : length;
  }
  for (let itr of value) {
    if (itr.length == length) ans.push(itr);
  }

  return ans;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

function convertString(s, t) {
  let j = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === str[j]) {
      ans = ans.concat(s[i]);
      j++;
    }
    if (t === ans) {
      return true;
    }
  }

  return false;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));

// palindromeRearranging

function palindromeRearranging(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  let keys = Object.keys(obj);
  if (keys.length % 2 != 0) {
    return false;
  }
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 != 0) {
      return false;
    }
  }
  return true;
}
console.log(palindromeRearranging("aabb")); // true
console.log(palindromeRearranging("aabbc")); // false

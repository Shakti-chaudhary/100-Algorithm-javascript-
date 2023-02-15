function commonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  const chars1 = getCharList(arr1);
  const chars2 = getCharList(arr2);
  let total = 0;

  for (const key in chars1) {
    if (chars2.hasOwnProperty(key)) {
      if (chars1[key] > chars2[key]) {
        total += chars2[key];
      } else {
        total += chars1[key];
      }
    }
  }
  return total;
}

function getCharList(chars) {
  const obj = {};

  for (let i = 0; i < chars.length; i++) {
    if (obj.hasOwnProperty(chars[i])) {
      obj[chars[i]]++;
    } else {
      obj[chars[i]] = 1;
    }
  }
  return obj;
}
console.log(commonCharacterCount("aabca", "adbca"));
console.log(commonCharacterCount("aabcc", "adcaa"));

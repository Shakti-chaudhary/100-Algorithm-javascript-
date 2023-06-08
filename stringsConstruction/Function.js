// stringsConstruction

function stringsConstruction(stringA, stringB) {
  const countA = {};
  const countB = {};

  // Count occurrences of each letter in stringA
  for (const char of stringA) {
    countA[char] = (countA[char] || 0) + 1;
  }

  // Count occurrences of each letter in stringB
  for (const char of stringB) {
    countB[char] = (countB[char] || 0) + 1;
  }

  // Calculate the minimum count of each letter in both strings
  let minCount = Infinity;
  for (const char in countA) {
    if (countB.hasOwnProperty(char)) {
      const count = Math.floor(countB[char] / countA[char]);
      minCount = Math.min(minCount, count);
    } else {
      return 0;
    }
  }

  return minCount;
}

console.log(stringsConstruction("abc", "abccba"));
console.log(stringsConstruction("abcc", "abcccba"));

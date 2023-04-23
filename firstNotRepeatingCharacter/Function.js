// put string char in object with occurance

function firstNotRepeatingCharacter(inputStr) {
  let charCount = {};

  for (let char of inputStr) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char in charCount) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return "_";
}

console.log(firstNotRepeatingCharacter("abacabad")); // "c"
console.log(firstNotRepeatingCharacter("abacabaabacaba")); // "_"

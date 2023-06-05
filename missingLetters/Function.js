// missingLetters

function missingLetters(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

console.log(missingLetters("abce")); // d
console.log(missingLetters("abcdefghjklmno")); // i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); // undefined

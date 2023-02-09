function alphabetSubsequence(arg) {
  //? For test case...

  //   let chars = arg.split("");
  //   let charValues = [];
  //   chars.forEach((char) => {
  //     charValues.push(char.charCodeAt(0));
  //   });
  //   charValues;
  //   if (new Set(charValues).size !== chars.length) {
  //     return false;
  //   }

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] >= arg[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));

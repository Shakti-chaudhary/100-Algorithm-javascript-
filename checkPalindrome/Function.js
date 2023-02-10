function checkPalindrome(arg) {
  let lwrArg = arg.toLowerCase();

  let reverseArg = lwrArg.split("").reverse().join("");

  return reverseArg == lwrArg;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));

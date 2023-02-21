function isCaseInsensitivePalindrome(inputString) {
  const lowerCaseInput = inputString.toLowerCase();
  const reverseInput = lowerCaseInput
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return reverseInput === lowerCaseInput;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));

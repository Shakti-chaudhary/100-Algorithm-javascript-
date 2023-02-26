function differentSymbolsNaive(s) {
  let result = new Set(s);
  return result.size;
}

console.log(differentSymbolsNaive("abcedd"));
console.log(differentSymbolsNaive("cabca"));

function confirmEnding(string, target) {
  let start = string.length - target.length;

  return string.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

// sortByLength

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));

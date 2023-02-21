function containsDuplicates(arr) {
  let set = new Set(arr);
  if (set.size !== arr.length) {
    return true;
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

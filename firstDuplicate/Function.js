// FirstDuplicate

function firstDuplicate(a) {
  const mySet = new Set();
  for (let i = 0; i < a.length; ++i) {
    if (mySet.has(a[i])) {
      return a[i];
    }
    mySet.add(a[i]);
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3

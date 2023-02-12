function areSimilar(a, b) {
  let swap = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      continue;
    } else if (swap < 1) {
      [b[i], b[i + 1]] = [b[i + 1], b[i]];
      swap++;
      if (a[i] != b[i]) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

// ========================  Second Function  ====================================

// function areSimilar(a, b) {
// let c = [];
// let d = [];

// if (a.toString() === b.toString()) {
//   return true;
// }

// for (let i = 0; i < a.length; i++) {
//   if (a[i] !== b[i]) {
//     c.push(a[i]);
//     d.push(b[i]);
//   }
// }
// d = d.reverse();
// if (c.length === 2 && c.toString() === d.toString()) {
//   return true;
// }
// return false;
// }

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 2], [2, 3, 5]));
console.log(areSimilar([10, 20, 30], [10, 20, 30]));
console.log(areSimilar([10, 20, 30], [30, 10, 20]));
console.log(areSimilar([10, 20, 30, 40], [10, 30, 20, 40]));

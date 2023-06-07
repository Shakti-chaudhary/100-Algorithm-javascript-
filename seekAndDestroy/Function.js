// seekAndDestroy

function seekAndDestroy(targets, toDestroy) {
  const result = [];
  targets.forEach((target) => {
    if (!toDestroy.includes(target)) {
      result.push(target);
    }
  });
  return result;
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5])); // [1]
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3])); // [ 1, 5, 1]

// Flatten Array

function flattenArray(arr) {
  return arr.flat(Infinity);
}
// Test Case
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

function chunkyMonkey(arr, len) {
  let count = 0;
  let new_arr = [];

  while (count < arr.length) {
    new_arr.push(arr.slice(count, (count += len)));
  }
  return new_arr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

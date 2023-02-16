function arrayConversion(arr) {
  let count = true;

  while (arr.length !== 1) {
    let arr1 = [];
    if (count) {
      for (let i = 0; i < arr.length; i += 2) {
        arr1.push(arr[i] + arr[i + 1]);
      }
    } else {
      for (let i = 0; i < arr.length; i += 2) {
        arr1.push(arr[i] * arr[i + 1]);
      }
    }
    arr = arr1;
    count = !count;
  }

  return arr[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

// arrayChange

function arrayChange(a) {
  let value = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[i + 1]) {
      const difference = a[i] + 1 - a[i + 1];
      a[i + 1] = a[i] + 1;
      value += difference;
    }
  }
  return value;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([6, 2, 1]));
console.log(arrayChange([8, 1, 7]));
console.log(arrayChange([9, 11, 13]));

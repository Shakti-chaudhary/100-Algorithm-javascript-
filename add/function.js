function add(num1, num2) {
  return num1 + num2;
}
function add2(...value) {
  let ans = 0;
  value;
  value.forEach((element) => {
    ans = ans + element;
  });

  return ans;
}

console.log(add(2, 6));
console.log(add2(2, 4, 5, 6));

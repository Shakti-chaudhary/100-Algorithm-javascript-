function addTwoDigits(value) {
  const ans = value.toString().split("");

  return ans.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(99));

function companyBotStrategy(arr) {
  let time = 0;
  let correctness = 0;

  arr.forEach((element) => {
    if (element[1] === 1) {
      time += element[0];
      correctness += element[1];
    }
  });
  return time / correctness || 0;
}
console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);

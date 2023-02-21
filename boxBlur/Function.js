function boxBlur(image) {
  const answer = [];

  for (let i = 0; i < image.length - 2; i++) {
    const matrix = [];
    for (let j = 0; j < image[0].length - 2; j++) {
      let sum = 0;
      let count = 0;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          sum += image[x][y];
          count++;
        }
      }
      matrix.push(Math.floor(sum / count));
    }
    answer.push(matrix);
  }
  return answer;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
console.log(
  boxBlur([
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0],
  ])
);

// MatrixElementsSum

function matrixElementsSum(matrix) {
  let totalSum = 0;
  const firstFreeRoomIndices = new Array(matrix[0].length).fill(0);

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] !== 0 && row >= firstFreeRoomIndices[col]) {
        totalSum += matrix[row][col];
        firstFreeRoomIndices[col] = row + 1;
      }
    }
  }

  return totalSum;
}

console.log(
  matrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);

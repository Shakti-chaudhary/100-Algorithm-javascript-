// MatrixElementsSum

function matrixElementsSum(matrix) {
  let totalSum = 0;

  // Keep track of the indices of the first free room in each column
  const freeRoomIndices = new Array(matrix[0].length).fill(0);

  // Iterate over each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Iterate over each column in the row
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current room is not free and there are no free rooms above it in the same column
      if (matrix[i][j] !== 0 && i >= freeRoomIndices[j]) {
        // Add the value of the current room to the total sum
        totalSum += matrix[i][j];

        // Update the index of the first free room in the same column
        freeRoomIndices[j] = i + 1;
      }
    }
  }

  return totalSum;
}

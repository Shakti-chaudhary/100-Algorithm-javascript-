// minimalNumberOfCoins

function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    result[i] = new Array(numCols);

    for (let j = 0; j < numCols; j++) {
      result[i][j] = countNeighbors(i, j, matrix);
    }
  }

  return result;
}

function countNeighbors(row, col, matrix) {
  let count = 0;

  // Check each of the eight neighboring cells
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      // Skip the current cell and out-of-bounds cells
      if (
        (i === row && j === col) ||
        i < 0 ||
        i >= matrix.length ||
        j < 0 ||
        j >= matrix[0].length
      ) {
        continue;
      }

      // Increment the count if the neighboring cell contains a mine
      if (matrix[i][j]) {
        count++;
      }
    }
  }

  return count;
}

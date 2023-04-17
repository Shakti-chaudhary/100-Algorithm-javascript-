// ExtractMatrixColumn

function extractMatrixColumn(matrix, column) {
  var columnArray = [];
  for (var i = 0; i < matrix.length; i++) {
    columnArray.push(matrix[i][column]);
  }
  return columnArray;
}

var matrix = [
  [1, 1, 1, 2],
  [0, 5, 0, 4],
  [2, 1, 3, 6],
];

console.log(extractMatrixColumn(matrix, 2));

// seatsInTheater

function seatsInTheater(numCols, numRows, seatCol, seatRow) {
  return (numCols + 1 - seatCol) * (numRows - seatRow);
}

console.log(seatsInTheater(16, 11, 5, 3));

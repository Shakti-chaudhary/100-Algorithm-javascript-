function chessBoardCellColor(cell1, cell2) {
  const key = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  let total1 = key[cell1[0]] + parseInt(cell1[1]);
  let total2 = key[cell2[0]] + parseInt(cell2[1]);

  return total1 % 2 === total2 % 2;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));

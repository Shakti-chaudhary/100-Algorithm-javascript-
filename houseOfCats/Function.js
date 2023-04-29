// HouseOfCats

function houseOfCats(legs) {
  let result = [];
  if (legs === 2) {
    return [1];
  }
  while (legs > 0) {
    result.unshift(legs / 2);
    legs -= 4;
  }

  return result;
}

console.log(houseOfCats(18)); // [1,3,5,7,9]
console.log(houseOfCats(8)); // [2, 4]
console.log(houseOfCats(6)); // [1, 3]
console.log(houseOfCats(2)); // [1]

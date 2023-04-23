// findClosestPair

function findClosestPair(numbers, sum) {
  let minDistance = -1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === sum) {
        const distance = j - i;
        if (minDistance === -1 || distance < minDistance) {
          minDistance = distance;
        }
      }
    }
  }

  return minDistance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); // 2
console.log(findClosestPair([2, 3, 7], 8)); // -1

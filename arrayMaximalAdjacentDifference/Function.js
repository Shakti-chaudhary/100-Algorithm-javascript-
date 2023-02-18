function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = inputArray[0] - inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
    maxDiff = maxDiff < absoluteDiff ? absoluteDiff : maxDiff;
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));

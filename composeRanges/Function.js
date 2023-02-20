function composeRanges(nums) {
  if (nums.length < 1) {
    return [];
  }
  let ranges = [];
  let start = null;
  let end = null;

  for (let i = 0; i < nums.length; i++) {
    if (start === null) {
      start = nums[i];
      end = nums[i];
    } else if (end + 1 === nums[i]) {
      end = nums[i];
    } else {
      ranges.push(start === end ? start.toString() : start + "->" + end);
      start = nums[i];
      end = nums[i];
    }
  }

  if (start !== null) {
    ranges.push(start === end ? start.toString() : start + "->" + end);
  }

  return ranges;
}

console.log(composeRanges([-2, -1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([0, 1, 2, 6, 7, 9]));

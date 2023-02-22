function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], (k = 3)));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], (k = 2)));
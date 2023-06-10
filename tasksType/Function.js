// tasksTypes

function tasksTypes(tasks, threshold) {
  const freq = {};
  for (const task of tasks) {
    freq[task] = (freq[task] || 0) + 1;
  }
  const counts = [0, 0, 0];
  for (const task in freq) {
    const count = freq[task];
    if (task <= threshold) counts[0] += count;
    else if (task <= 8) counts[1] += count;
    else counts[2] += count;
  }
  return counts;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2)); // [2, 3, 0]
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1)); // [2, 8, 2]

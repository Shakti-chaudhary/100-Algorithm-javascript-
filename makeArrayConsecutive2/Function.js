// MakeArrayConsecutive2

function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b);
  let additionalStatues = 0;
  for (let i = 0; i < statues.length - 1; i++) {
    const difference = statues[i + 1] - statues[i] - 1;
    additionalStatues += difference;
  }
  return additionalStatues;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3

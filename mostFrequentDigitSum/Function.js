// mostFrequentDigitSum

function step(x) {
  return (
    x -
    x
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b))
  );
}

function mostFrequentDigitSum(n) {
  const freq = {};
  let seq = [n];
  while (seq[seq.length - 1] > 0) {
    seq.push(step(seq[seq.length - 1]));
  }
  seq;
  seq = seq.map((x) =>
    x
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b))
  );
  seq.forEach((s) => {
    if (freq.hasOwnProperty(s)) {
      freq[s]++;
    } else {
      freq[s] = 1;
    }
  });
  let maxSum = 0;
  let maxFreq = 0;
  Object.keys(freq).forEach((k) => {
    if (freq[k] > maxFreq || (freq[k] === maxFreq && parseInt(k) > maxSum)) {
      maxFreq = freq[k];
      maxSum = parseInt(k);
    }
  });
  return maxSum;
}

console.log(mostFrequentDigitSum(88)); // 9
console.log(mostFrequentDigitSum(8)); // 8

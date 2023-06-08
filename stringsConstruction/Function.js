// stringsConstruction

function stringsConstruction(target, source) {
  const charCount = {};
  for (let i = 0; i < source.length; i++) {
    if (charCount[source[i]]) {
      charCount[source[i]] += 1;
    } else {
      charCount[source[i]] = 1;
    }
  }

  const charFreq = [];
  for (let i = 0; i < target.length; i++) {
    charFreq.push(charCount[target[i]] || 0);
  }

  let minFreq = Infinity;
  for (let i = 0; i < charFreq.length; i++) {
    minFreq = Math.min(minFreq, charFreq[i]);
  }

  return Math.floor(minFreq);
}

console.log(stringsConstruction("abc", "abccba"));

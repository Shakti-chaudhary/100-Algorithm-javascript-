// pigLatin

function pigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result;
  if (vowels.includes(str[0])) {
    result = str + "way";
  } else {
    let consonantCluster = "";
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result = str.slice(i) + consonantCluster + "ay";
        break;
      } else {
        consonantCluster += str[i];
      }
    }
  }
  return result;
}

console.log(pigLatin("glove")); // "oveglay"
console.log(pigLatin("eight")); // "eightway"

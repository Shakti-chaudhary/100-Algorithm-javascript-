// stolenLunch

function convertToAlphabeticalIndex(str) {
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt();
      if (charCode >= 97 && charCode <= 106) {
        return charCode - 97;
      } else if (!isNaN(char)) {
        return String.fromCharCode(97 + parseInt(char));
      } else {
        return char;
      }
    })
    .join("");
}
function stolenLunch(str) {
  const words = str.split(" ");
  const modifiedWords = words.map((word) => convertToAlphabeticalIndex(word));
  return modifiedWords.join(" ");
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));

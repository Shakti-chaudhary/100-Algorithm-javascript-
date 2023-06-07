// properNounCorrection

function properNounCorrection(noun) {
  const firstChar = noun[0].toUpperCase();
  const remainingChars = noun.slice(1).toLowerCase();
  return firstChar + remainingChars;
}

console.log(properNounCorrection("Paris"));

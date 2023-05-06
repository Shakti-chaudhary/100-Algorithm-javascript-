// isTandemRepeat

function isTandemRepeat(inputString) {
  const len = inputString.length;
  if (len % 2 === 0) {
    const half = inputString.slice(0, len / 2);
    return inputString.slice(len / 2) === half;
  } else {
    return false;
  }
}
console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));

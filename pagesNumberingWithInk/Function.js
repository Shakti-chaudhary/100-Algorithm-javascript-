// pagesNumberingWithInk

function pagesNumberingWithInk(start, total) {
  while (start.toString().length <= total) {
    total -= start.toString().length;
    start++;
  }
  return start - 1;
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(8, 4));
console.log(pagesNumberingWithInk(21, 5));

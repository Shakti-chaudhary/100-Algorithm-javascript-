// sortByHeight

function sortByHeight(heights) {
  const sortedHeights = heights
    .filter((height) => height !== -1)
    .sort((a, b) => a - b);

  let index = -1;

  return heights.map((element) => {
    if (element !== -1) {
      index++;
      return sortedHeights[index];
    } else {
      return -1;
    }
  });
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

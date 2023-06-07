// ratingThreshold

function ratingThreshold(threshold, ratings) {
  let result = [];
  for (let i = 0; i < ratings.length; i++) {
    let sum = ratings[i].reduce((a, b) => a + b, 0);
    let avg = sum / ratings[i].length;
    if (avg < threshold) {
      result.push(i);
    }
  }
  return result;
}

let threshold = 3.5;
let ratings = [[3, 4], [3, 3, 3, 4], [4]];
let result = ratingThreshold(threshold, ratings);
console.log(result); // Output: [1]

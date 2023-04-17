// Fancy Rides

function fancyRide(l, fares) {
  const carOptions = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

  for (let i = 0; i < fares.length; i++) {
    if (fares[i] * l > 20) {
      return carOptions[i - 1];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));

// LateRide

function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  const timeString = hours.toString().concat(minutes.toString());
  const digitsArray = timeString.split("").map((digit) => parseInt(digit));
  const sum = digitsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum;
}

console.log(lateRide(240)); // 4
console.log(lateRide(808)); // 14

// validTime

function isValidTime(time) {
  // Split time string into hours and minutes
  const [hours, minutes] = time.split(":").map(Number);

  // Check if hours and minutes are within valid range
  if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
    return true; // Return true if time is valid
  }
  return false; // Otherwise return false
}

console.log(isValidTime("13:58")); // true
console.log(isValidTime("25:51")); // false
console.log(isValidTime("2:76")); // false

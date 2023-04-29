// Incorrect Password Attempts

function incorrectPasscodeAttempts(passcode, attempts) {
  let consecutive_failed_attempts = 0;

  for (let attempt of attempts) {
    if (attempt === passcode) {
      consecutive_failed_attempts = 0;
    } else {
      consecutive_failed_attempts++;
      if (consecutive_failed_attempts >= 10) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "1111",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "5555",
    "5555",
    "5555",
    "5555",
    "5555",
    "1111",
  ])
);

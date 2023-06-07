// reflectString

function reflectString(str) {
  const chars = str.split("");
  let result = "";
  chars.forEach((char) => {
    const charCode = char.charCodeAt() - 96;
    result += String.fromCharCode(123 - charCode);
  });
  return result;
}

console.log(reflectString("name"));

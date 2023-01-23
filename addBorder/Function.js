function addBorder(value) {
  const lengthOfValue = value[0].length + 2;
  let border = "";

  for (let i = 0; i < lengthOfValue; i++) {
    border = border.concat("*");
  }

  //   const border = "*".repeat(value[0].length + 2);

  value.unshift(border);
  value.push(border);

  for (let i = 1; i < value.length - 1; i++) {
    value[i] = "*".concat(value[i], "*");
  }

  return value;
}

console.log(addBorder(["abc", "ded"]));

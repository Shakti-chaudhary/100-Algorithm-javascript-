function addBorder(value) {
  const lengthOfValue = value[0].length + 2;

  let border = "";
  for (let i = 0; i < lengthOfValue; i++) {
    border = border.concat("*");
  }

  //   const border = "*".repeat(value[0].length + 2);

  value.forEach((element, index, value) => {
    value[index] = "*".concat(element, "*");
  });
  value.unshift(border);
  value.push(border);
  return value;
}

console.log(addBorder(["abc", "ded"]));

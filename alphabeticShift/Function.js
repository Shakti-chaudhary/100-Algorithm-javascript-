function alphabeticShift(arg) {
  const alphabet = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a",
  };

  let inputSwifted = arg.split("");

  for (let i = 0; i < arg.length; i++) {
    inputSwifted[i] = alphabet[inputSwifted[i]];
  }

  return inputSwifted.join("");
}

console.log(alphabeticShift("crazy"));

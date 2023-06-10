// switchlights

function switchLights(lights) {
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] == 1) {
      for (let j = 0; j <= i; j++) {
        lights[j] ^= 1;
      }
    }
  }
  return lights;
}

console.log(switchLights([0, 0])); // [0, 0]
console.log(switchLights([1, 1, 1, 1, 1])); // [0, 1, 0, 1, 0]

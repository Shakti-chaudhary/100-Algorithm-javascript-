function absolute(value) {
    const isEven = value.length % 2 === 0;

    return isEven ? value[value.length / 2 -1] : value[Math.floor( value.length / 2)];
}

console.log(absolute([2,4,7]));
console.log(absolute([2,4,7,6]))
console.log(absolute([2,4,7,6,6]))
console.log(absolute([2,4,7,6,6,8]))
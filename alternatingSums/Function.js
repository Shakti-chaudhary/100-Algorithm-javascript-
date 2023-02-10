function alternatingSums(arg) {
  let totalSum = [0, 0];

  // for (let i = 0; i < arg.length; i++) {
  //   if (i  % 2 == 0) {
  //     totalSum[0] = totalSum[0] + arg[i];
  //   } else {
  //     totalSum[1] = totalSum[1] + arg[i];
  //   }
  // }

  //   ============================================================================

  arg.forEach((element, i) => {
    if (i % 2 === 0) {
      totalSum[0] += element;
    } else {
      totalSum[1] += element;
    }
  });

  return totalSum;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

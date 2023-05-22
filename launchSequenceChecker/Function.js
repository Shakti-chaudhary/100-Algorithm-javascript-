// LaunchSequenceCecker

function launchSequenceChecker(systemNames, stepNumbers) {
  const sequences = {};
  for (let i = 0; i < systemNames.length; i++) {
    const systemName = systemNames[i];
    const stepNumber = stepNumbers[i];
    if (!sequences.hasOwnProperty(systemName)) {
      sequences[systemName] = [stepNumber];
    } else {
      const systemSequence = sequences[systemName];
      if (stepNumber <= systemSequence[systemSequence.length - 1]) {
        return false;
      } else {
        systemSequence.push(stepNumber);
      }
    }
  }
  return true;
}
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"],
    [1, 10, 11, 2, 12, 111]
  )
);
console.log(
  launchSequenceChecker(
    ["stage_1", "stage_1", "stage_2", "dragon"],
    [2, 1, 12, 111]
  )
);

// programme for election purposes winner

function electionwinner(votes, k) {
  votes.sort((a, b) => a - b);
  let max = Math.max(...votes);
  let winner = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] + k > max) {
      winner++;
    }
  }
  return winner;
}

console.log(electionwinner([2, 3, 5, 2], 3));

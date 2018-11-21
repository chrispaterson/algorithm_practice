function countSort(arr, maxVal) {

  const counts = new Array(maxVal + 1).fill(0);

  arr.forEach(val => {
    counts[val] ++;
  });

  const retr = [];

  for(let val = maxVal; val >= 0; val--) {
    const count = counts[val];

    for(let j = 0; j < count; j++) {
      retr.push(val);
    }
  }
  return retr;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(countSort(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]

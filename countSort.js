// arr is the array to sort
// maximum value is the maximum value in the array
function countSort(arr, maxVal) {

  // create an array with the number of times a number
  // appears in arr
  const counts = new Array(maxVal + 1).fill(0);

  // count each occurrence of a number by looping
  // through the unsorted arr and then incrementing
  // a number in our counts array
  arr.forEach(val => {
    counts[val] ++;
  });

  // create our final returned array.  This is not
  // an in-place sorting algorithm
  const retr = [];

  // loop through backwards between all the
  // possible values of the array so we push the 
  // highest value towards the front of the array.
  for(let val = maxVal; val >= 0; val--) {

    // number of times this value occurs
    const count = counts[val];

    // add this value to the final output array
    // for every time it occurs in the original
    for(let times = 0; times < count; times++) {
      retr.push(val);
    }
  }
  return retr;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(countSort(unsortedScores, HIGHEST_POSSIBLE_SCORE));
// returns [91, 89, 65, 53, 41, 37]

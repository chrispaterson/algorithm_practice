// In order to win the prize for most cookies sold, 
// my friend Alice and I are going to merge our 
// Girl Scout Cookies orders and enter as one unit.
//
// Each order is represented by an "order id" 
// (an integer).
//
// We have our lists of orders sorted numerically 
// already, in arrays. Write a function to merge 
// our arrays of orders into one sorted array.
//
// For Example:
var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

//  solution O(n)
function mergeArrays(myArray, alicesArray) {

  // set up our mergedArray
  var mergedArray = [];

  var currentIndexAlices = 0;
  var currentIndexMine   = 0;
  var currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    var isMyArrayExhausted = currentIndexMine >= myArray.length;
    var isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // case: next comes from my array
    // my array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) the current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}

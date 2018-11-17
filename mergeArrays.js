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
var myArray     = [3, 4, 6, 10, 11, 17];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

//  solution O(n)
function mergeArrays(ar1, ar2) {

  // our new array length will be the sum of the
  // two sub arrays
  var len = ar1.length + ar2.length;

  // might as well set the number of elements
  // ahead of time so we can allow JS to not 
  // for a dynamic resize
  var retr = new Array(len);

  // create our indices for tracking our progress
  // int he sorted arrays
  var ar1Idx = 0;
  var ar2Idx = 0;

  // loop through the length of our return array
  for(var i = 0; i < len; i ++) {

    // if the value in array 2 is less than the 
    // value in array 1 then we'll put that value
    // into a return value first and then increment
    // our index for that array
    if(ar1[ar1Idx] > ar2[ar2Idx]) {

      retr[i] = ar2[ar2Idx];
      ar2Idx++;
    } else if(ar1[ar1Idx] < ar2[ar2Idx]){

      retr[i] = ar1[ar1Idx];
      ar1Idx++;
    }

    // are we on the last loop?  If yes then
    // one will be orphaned, we have to find
    // which one it is.
    if(i === len - 1) {

      if(ar1[ar1Idx] !== undefined) {

        retr[i] = ar1[ar1Idx];
      } else {

        retr[i] = ar2[ar2Idx];
      }
    }
  }
  return retr;

}

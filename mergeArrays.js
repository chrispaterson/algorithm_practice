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
function mergeArrays(ar1, ar2) {
  var len = ar1.length + ar2.length - 1;
  var retr = new Array(len);
  var ar1Idx = 0;
  var ar2Idx = 0;
  var i = 0;

  for(i; i < len; i ++) {

    if(ar1[ar1Idx] > ar2[ar2Idx]) {

      retr[i] = ar2[ar2Idx];
      ar2Idx++;
    } else {

      retr[i] = ar1[ar1Idx];
      ar1Idx++;
    }
  }
  return retr;

}

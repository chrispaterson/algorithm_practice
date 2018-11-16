var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

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

console.log(mergeArrays(myArray, alicesArray));

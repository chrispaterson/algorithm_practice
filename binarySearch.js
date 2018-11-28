function binarySearch(target, arr) {

  let found = false;
  let left = 0;
  let right = arr.length - 1;
  let check;

  while ( !found && left !== right - 1) {

    check = Math.floor((right -  left) / 2) + left;
    found = (arr[check] === target);

    if(arr[check] < target) {

      left = check;
    } else {

      right = check;
    }
  }

  return found;
}


console.log(binarySearch(250, [ 3,5,6,11,22,33,44,55,66,77,89,100,200,250,260,270,275,276,277,278,279]));



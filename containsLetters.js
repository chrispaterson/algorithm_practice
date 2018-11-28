function containsLetters(str, ofStr) {
  let base = {};
  let test = {};
  let retr = true;

  if(str.length !== ofStr.length) {
    return false;
  }

  for(let i = 0; i < str.length; i++) {

    let letter = str[i];
    if(test[letter]) {
      test[letter] += 1;
    } else {
      test[letter] = 1;
    } 
  }

  for(let i = 0; i < ofStr.length; i++) {

    let letter = ofStr[i];
    if(base[letter]) {
      base[letter] += 1;
    } else {
      base[letter] = 1;
    } 
  }

  for(let i = 0; i < str.length && retr; i ++) {
    retr = (base[str[i]] === test[str[i]]);
  }

  return retr;
}

console.log(containsLetters("house", "euoh"));

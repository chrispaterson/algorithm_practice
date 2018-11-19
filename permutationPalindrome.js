function isPPalindrome(word) {
  let counts = {};
  let numOdds = 0;

  for(let i = 0; i < word.length; i++) {

    if(counts[word[i]]) {

      counts[word[i]] ++;
    } else {

      counts[word[i]] = 1;
    }
  }

  for(let i = 0; i < word.length && numOdds < 2; i++) {

    numOdds += (counts[word[i]] & 1);
  }
  
  return (numOdds < 2);
}

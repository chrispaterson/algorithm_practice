//You're working on a secret team solving coded transmissions.
//
// Your team is scrambling to decipher a recent message,
// worried it's a plot to break into a major European National
// Cake Vault. The message has been mostly deciphered, but all
// the words are backward! Your colleagues have handed off the
// last step to you.
//
// Write a function reverseWords() that takes a message as an
// array of characters and reverses the order of the words in
// place.
//
// For Example:
const message = [ 'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));

// Solution O(n) 

// reverse the string in place based on a right and left
// boundary (basically a swap function)
function reverseWords(message) {

  let lastLeft = 0;

  // first reverse the entire message
  reverseSegment(0, message.length - 1, message);

  // now go through and reverse each word back to the original
  // direction at word boundaries or at the edge case of it
  // being the end of the string
  for(let i = 0; i < message.length; i++) {

    if(message[i] === " ") {

      reverseSegment(lastLeft, i - 1, message);
      i ++;
      lastLeft = i;
    } else if (i === message.length - 1) {

      reverseSegment(lastLeft, i, message);
    }
  }
}

function reverseSegment(left, right, str) {
  let temp;
  while(right > left) {
    temp = str[left];
    str[left] = str[right]
    str[right] = temp;
    left += 1;
    right -= 1;
  }
}

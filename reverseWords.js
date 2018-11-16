// reverse the string in place based on a right and left
// boundary (basically a swap function)
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

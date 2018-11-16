function reverseWords(message) {

  // Decode the message by reversing the words
  
    let reverseSegment = function(left, right, str) {
      let temp;
      while(right > left) {
        temp = str[left];
        str[left] = str[right]
        str[right] = temp;
        left += 1;
        right -= 1;
      }
    }
    let lastIndex = 0;
    
    reverseSegment(0, message.length - 1, message);

    for(let i = 0; i < message.length; i++) {
      
      if(message[i] === " ") {
        
        reverseSegment(lastIndex, i - 1, message);
        i ++;
        lastIndex = i;
      } else if (i === message.length - 1) {
        
        reverseSegment(lastIndex, i, message);
        i ++;
        lastIndex = i;
      }
    }
}

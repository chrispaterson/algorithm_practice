//You want to build a word cloud, an infographic where the size of a word 
//corresponds to how often it appears in the body of text.
//
// To do this, you'll need data. Write code that takes a long string and builds 
// its word cloud data in a map, where the keys are words and the values are 
// the number of times the words occurred.

// O(2n)
function wordCloud(input) {

  let words = input.split(" ");
  let map = new Map();

  for(let i = 0; i < words.length; i++) {

    let word = words[i].toLowerCase().match(/[a-z]/g).join("");

    if(map.has(word)) {

      map.set(word, map.get(word) + 1);
    } else {

      map.set(word, 1);
    }
  }
  return map;
}

// O(n)
function wordCloud(input) {

  let map = new Map();
  let temp = "";

  for(let i = 0; i < input.length; i++) {

    let char = input[i];
    let charCode = char.charCodeAt(0);

    // it's an alpha char
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {

      temp += char;
    } else if(char === " " || char === "\n" || i === input.length - 1) {

      if(map.has(temp)) {

        map.set(temp, map.get(temp) + 1);
      } else {

        map.set(temp, 1);
        temp = "";
      }
    }
  }

  return map;
}

console.log(wordCloud("After beating the eggs, Dana read the next step:"));

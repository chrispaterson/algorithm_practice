function shuffle(arr) {

  for(let i = arr.length - 1; i >= 0; i--) {

    let rand = Math.floor(Math.random() * i);

    let temp = arr[i];
    arr[i] = arr[rand];
    arr[rand] = temp;

  }
  return arr;
}

// make a test deck
let deck = [];
for(let i = 1; i <= 52; i++) {
  deck.push(i);
}

console.log(shuffle(deck));

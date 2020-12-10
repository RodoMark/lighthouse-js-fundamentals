"use strict";

//multiples, words

function loopyLighthouse(range, multiples, words) {
  let number = range[0];
  while (number <= range[1]) {
    if (number % multiples[0] === 0 && number % multiples[1] !== 0) {
      console.log(words[0]);
    } else if (number % multiples[1] === 0 && number % multiples[0] !== 0) {
      console.log(words[1]);
    } else if (number % multiples[1] === 0 && number % multiples[0] === 0) {
      console.log(`${words[0]}${words[1]}`);
    } else {
      console.log(number);
    }
    number++;
  }
}

loopyLighthouse([100, 200], [3, 4], ["Donnie", "Darko"]);
loopyLighthouse([200, 300], [2, 7], ["Super", "Hot"]);

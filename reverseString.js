"use strict";

function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i > -1; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Alon"));
console.log(reverseString("Tanya"));
console.log(reverseString("go hang a salami I'm a lasagna hog"));

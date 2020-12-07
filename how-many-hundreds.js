"use strict";

function howManyHundreds(number) {
  if (number > 99) {
    return Math.trunc(number / 100);
  } else return 0;
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

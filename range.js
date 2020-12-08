"use strict";

function range(start, end, step) {
  let number = start;
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(number);
    number += step;
  }
  if (step <= 0) {
    return [];
  } else if (start > end) {
    return [];
  } else if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else {
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 2, 3));
console.log(range(0, 2, -3));

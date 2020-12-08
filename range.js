"use strict";

function range(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  } else {
    let n = start;
    while (n <= end) {
      array.push(n);
      n += step;
    }
    return array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 2, 3));
console.log(range(0, 2, -3));

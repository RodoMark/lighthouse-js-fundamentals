"use strict";

function lastIndexOf(array, value) {
  let indexCounter = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) indexCounter = i;
  }
  return indexCounter;
}

console.log(lastIndexOf([0, 5, 0], 5));
console.log(lastIndexOf([0, 1, 2, 3, 4], 0));
console.log(lastIndexOf([0, 1, 1, 1, 1], 1));
console.log(lastIndexOf([0, 1, 1, 1, 1], 0));
console.log(lastIndexOf([3, 1, 1, 1, 1], 3));
console.log(lastIndexOf([0, 1, 2, 1, 0], 3));
console.log(lastIndexOf([5, 5, 5], 5));
console.log(lastIndexOf([], 3));
console.log(lastIndexOf([1], 1));

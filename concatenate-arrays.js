"use strict";

function concat(array1, array2) {
  let concatArray = array1;
  for (let i = 0; i < array2.length; i++) {
    concatArray.push(array2[i]);
  }
  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]));
console.log(concat([5, 10], []));

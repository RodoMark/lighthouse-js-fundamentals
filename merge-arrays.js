"use strict";

function merge(array1, array2) {
  const mergedArray = [];

  //Put both arrays into 1 array
  for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
  }

  return mergedArray.sort(function (a, b) {
    return a - b;
  });
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));

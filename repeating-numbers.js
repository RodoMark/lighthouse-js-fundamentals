"use strict";

function repeatNumbers(nestedArray) {
  let repetition = 0;
  // Temporary array for dumping current iteration of repeating numbers
  let tempArray = [];
  // Array that will contain all iterations of repeating numbers
  let outputArray = [];

  // Loop over user input array
  for (let i = 0; i < nestedArray.length; i++) {
    // Limit comes from 2nd column in current row of array
    let limit = nestedArray[i][1];
    // Loop over 1st column of current row and put the repeating numbers into temporary array
    while (repetition < limit) {
      tempArray.push(nestedArray[i][0]);
      repetition++;
    }
    // Send repeating numbers to permanent array
    outputArray.push(tempArray.join(""));
    // Reset temp array for next iteration
    tempArray = [];
    repetition = 0;
  }
  // Output array returns concatenated with commas in between
  return outputArray.join(", ");
}

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
console.log(
  repeatNumbers([
    [500, 2],
    [3401, 4],
    [921, 2],
  ])
);

console.log(
  repeatNumbers([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
  ])
);

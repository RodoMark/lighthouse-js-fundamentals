"use strict";

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === "north") {
      y++;
    } else if (move === "south") {
      y--;
    } else if (move === "east") {
      x++;
    } else if (move === "west") {
      x--;
    }
  }
  let position = [x, y];
  return position;
}

console.log(finalPosition(["north"]));
console.log(finalPosition(["north", "east"]));
console.log(finalPosition(["south", "west"]));
console.log(finalPosition(["north", "south"]));
console.log(finalPosition(["east", "west"]));

console.log(
  finalPosition(["north", "north", "west", "west", "north", "east", "north"])
);

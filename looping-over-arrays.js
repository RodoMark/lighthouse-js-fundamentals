"use strict";

const amounts = [61.0, 52.25, 112.99, 5.0];
let total = 0;

for (let amount of amounts) {
  total += amount;
}

console.log("Order total is: ", total);

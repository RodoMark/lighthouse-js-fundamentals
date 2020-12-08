"use strict";

function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));

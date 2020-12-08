"use strict";

function judgeVegetable(vegetables, metric) {
  let highestRank = 0;
  let winner;
  //Round up all values for characteristic
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highestRank) {
      highestRank = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

console.log(judgeVegetable(vegetables, "redness"));

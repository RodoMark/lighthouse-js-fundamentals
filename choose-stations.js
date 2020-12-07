"use strict";

// const stations = [
//   ["Big Bear Donair", 10, "restaurant"],
//   ["Bright Lights Elementary", 50, "school"],
//   ["Moose Mountain Community Centre", 45, "community centre"],
// ];

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 10, "community centre"],
];

// const stations = [
//   ["A", 10, "school"],
//   ["B", 9, "restaurant"],
//   ["C", 21, "community centre"],
//   ["D", 15, "school"],
//   ["E", 50, "restaurant"],
//   ["F", 20, "school"],
//   ["G", 40, "community centre"],
//   ["H", 50, "school"],
// ];

let goodStations = [];

function chooseStations(stations) {
  for (let i = 0; i < stations.length; i++) {
    if (
      stations[i][1] >= 20 &&
      (stations[i][2] === "community centre" || stations[i][2] === "school")
    )
      goodStations.push(stations[i][0]);
  }
  return goodStations;
}

chooseStations(stations);

console.log(goodStations);

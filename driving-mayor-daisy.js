"use strict";

function carPassing(cars, speed) {
  const carsArray = cars;
  const carPassingNew = {
    time: Date.now(),
    speed: speed,
  };
  carsArray.push(carPassingNew);
  return carsArray;
}

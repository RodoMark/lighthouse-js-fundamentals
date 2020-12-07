"use strict";

let number = 100;

while (number <= 200) {
  if (number % 3 === 0 && number % 4 !== 0) {
    console.log("Loopy");
  } else if (number % 4 === 0 && number % 3 !== 0) {
    console.log("Lighthouse");
  } else if (number % 4 === 0 && number % 3 === 0) {
    console.log("LoopyLighthouse");
  } else {
    console.log(number);
  }
  number++;
}

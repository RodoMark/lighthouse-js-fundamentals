"use strict";

function ageCalculator(name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));

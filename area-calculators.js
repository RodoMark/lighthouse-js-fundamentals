function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else return length * width;
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else return (base * height) / 2;
}

function calculateCircleArea(radius) {
  let π = Math.PI;
  if (radius < 0) {
    return undefined;
  } else return Math.pow(radius, 2) * π;
}

console.log("Rectangle Area".padEnd(20, "-"));
console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log("Triangle Area".padEnd(20, "-"));
console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log("Circle Area".padEnd(20, "-"));
console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
